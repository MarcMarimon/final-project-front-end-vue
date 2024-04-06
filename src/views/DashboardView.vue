<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const tasksStore = useTasksStore()
const dashboardsStore = useDashboardsStore()
const newTaskTitle = ref('')
const newTaskDashboardId = ref(0)
const { tasks } = storeToRefs(tasksStore)
const { dashboards } = storeToRefs(dashboardsStore)

const addNewTask = async () => {
  if (newTaskTitle.value.trim() !== '') {
    await tasksStore.addTask(newTaskTitle.value, newTaskDashboardId.value)
    newTaskTitle.value = ''
    newTaskDashboardId.value = 0
  }
}

const tasksByDashboard = (dashboardId) => {
  return tasks.value.filter((task) => task.dashboard_id === dashboardId)
}
const removeTask = async (taskId) => {
  await tasksStore.removeTask(taskId)
}

const openEditView = (taskId) => {
  router.push({ name: 'editTask', params: { taskId } })
}
onMounted(() => {
  tasksStore.fetchTasks()
  dashboardsStore.fetchDashboards()
})
</script>
<template>
  <div>
    <h2>Dashboard</h2>

    <div v-for="dashboard in dashboards" :key="dashboard.id">
      <h3>{{ dashboard.name }}</h3>

      <ul>
        <li v-for="task in tasksByDashboard(dashboard.id)" :key="task.id">
          <div>
            <span>{{ task.title }} </span>
            <button @click="openEditView(task.id)">Edit</button>
          </div>
          <span> {{ task.status }} </span>
          <button @click="removeTask(task.id)">Eliminar</button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="addNewTask()">
      <select name="dashboard" id="dashboardSelected" v-model="newTaskDashboardId" required>
        <option v-for="dashboard in dashboards" :key="dashboard.id" :value="dashboard.id">
          {{ dashboard.name }}
        </option>
      </select>
      <input type="text" v-model="newTaskTitle" placeholder="Nueva tarea..." />
      <button type="submit">Agregar Tarea</button>
    </form>
  </div>
</template>
<style></style>
