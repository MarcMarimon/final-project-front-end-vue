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
const newDashboardName = ref('')
const editedDashboardName = ref('')
const isEditing = ref(-1)
const { tasks } = storeToRefs(tasksStore)
const { dashboards } = storeToRefs(dashboardsStore)

const addNewTask = async () => {
  if (newTaskTitle.value.trim() !== '') {
    await tasksStore.addTask(newTaskTitle.value, newTaskDashboardId.value)
    newTaskTitle.value = ''
    newTaskDashboardId.value = 0
  }
}
const addNewDashboard = async () => {
  if (newDashboardName.value.trim() !== '') {
    await dashboardsStore.addDashboard(newDashboardName.value)
    newDashboardName.value = ''
  }
}

const tasksByDashboard = (dashboardId) => {
  return tasks.value.filter((task) => task.dashboard_id === dashboardId)
}
const removeTask = async (taskId) => {
  await tasksStore.removeTask(taskId)
}
const deleteDashboard = async (dashboardId) => {
  await dashboardsStore.removeDashboard(dashboardId)
}
const startEdit = (dashboard) => {
  isEditing.value = dashboard.id
  editedDashboardName.value = dashboard.name
}
const saveDashboardName = async (dashboard) => {
  if (editedDashboardName.value.trim() !== '') {
    await dashboardsStore.updateDashboardById(dashboard.id, {
      name: editedDashboardName.value.trim()
    })
    isEditing.value = -1
  }
}
const cancelEdit = () => {
  isEditing.value = -1
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
      <div class="dashboard-title">
        <template v-if="isEditing === dashboard.id">
          <input
            type="text"
            v-model="editedDashboardName"
            placeholder="Nuevo nombre del Dashboard"
          />
          <button @click="saveDashboardName(dashboard)">Guardar</button>
          <button @click="cancelEdit()">Cancelar</button>
        </template>
        <template v-else>
          <h3>{{ dashboard.name }}</h3>
          <button @click="startEdit(dashboard)">Editar</button>
        </template>
        <button @click="deleteDashboard(dashboard.id)">Remove Dashboard</button>
      </div>
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
    <form @submit.prevent="addNewDashboard()">
      <input type="text" v-model="newDashboardName" placeholder="Nuevo dashboard..." />
      <button type="submit">Agregar Dashboard</button>
    </form>
  </div>
</template>
<style></style>
