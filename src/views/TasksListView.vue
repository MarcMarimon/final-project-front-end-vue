<script setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useRouter } from 'vue-router'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'

const router = useRouter()
const tasksStore = useTasksStore()
const newTaskTitle = ref('')
const { tasks } = storeToRefs(tasksStore)
const dashboardsStore = useDashboardsStore()
const { dashboards } = storeToRefs(dashboardsStore)
const dashboardId = parseInt(router.currentRoute.value.params.dashboardId)

const actualDashboard = computed(() => {
  return dashboards.value.find((dashboard) => dashboard.id === dashboardId)
})
const addNewTask = async () => {
  if (newTaskTitle.value.trim() !== '') {
    await tasksStore.addTask(newTaskTitle.value, dashboardId)
    newTaskTitle.value = ''
  }
}

const removeTask = async (taskId) => {
  await tasksStore.removeTask(taskId)
}
const tasksByDashboard = () => {
  return tasks.value.filter((task) => task.dashboard_id === dashboardId)
}
const openEditView = (taskId) => {
  router.push({ name: 'editTask', params: { taskId } })
}

onMounted(async () => {
  await tasksStore.fetchTasks()
  await dashboardsStore.fetchDashboards()
})
</script>

<template>
  <div v-if="actualDashboard && tasks.length">
    <h2>Tareas de {{ actualDashboard.name }}</h2>
    <ul>
      <li v-for="task in tasksByDashboard()" :key="task.id">
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
    <input type="text" v-model="newTaskTitle" placeholder="Nueva tarea..." />
    <button type="submit">Agregar Tarea</button>
  </form>
</template>
