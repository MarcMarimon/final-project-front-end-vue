<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import { TASK_STATUS } from '@/utils/enums.js'

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

const updateTaskStatus = async (taskId, newStatus) => {
  await tasksStore.updateTaskCompletionStatus(taskId, newStatus)
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
            <button @click="openEditView">Edit</button>
          </div>
          <select
            @change="updateTaskStatus(task.id, task.status)"
            name="taskStatus"
            id="taskStatus"
            v-model="task.status"
          >
            <option v-for="status in TASK_STATUS" :key="status" :value="status">
              {{ status }}
            </option>
          </select>
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
