<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const dashboardsStore = useDashboardsStore()
const newDashboardName = ref('')
const editedDashboardName = ref('')
const isEditing = ref(-1)
const { dashboards } = storeToRefs(dashboardsStore)

const addNewDashboard = async () => {
  if (newDashboardName.value.trim() !== '') {
    await dashboardsStore.addDashboard(newDashboardName.value)
    newDashboardName.value = ''
  }
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
const openDashboardTasks = (dashboardId) => {
  router.push({ name: 'DashboardTasks', params: { dashboardId } })
}
onMounted(() => {
  dashboardsStore.fetchDashboards()
})
</script>
<template>
  <div>
    <h2>Dashboard</h2>

    <div
      v-for="dashboard in dashboards"
      :key="dashboard.id"
      @click="openDashboardTasks(dashboard.id)"
    >
      <div class="dashboard-card">
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
        <button @click="deleteDashboard(dashboard.id)">Eliminar</button>
      </div>
    </div>

    <form @submit.prevent="addNewDashboard()">
      <input type="text" v-model="newDashboardName" placeholder="Nuevo dashboard..." />
      <button type="submit">Agregar Dashboard</button>
    </form>
  </div>
</template>
<style>
.dashboard-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

input[type='text'] {
  margin-right: 10px;
}
</style>
