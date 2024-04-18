<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import { useRouter } from 'vue-router'
import EditDashboard from '@/components/EditDashboard.vue'
import ModalComp from '@/components/ModalComp.vue'

const router = useRouter()
const dashboardsStore = useDashboardsStore()
const newDashboardName = ref('')
const editedDashboardName = ref('')
const { dashboards } = storeToRefs(dashboardsStore)
const showEditDialog = ref(false)
const selectedDashboardId = ref(null)

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
  editedDashboardName.value = dashboard.name
  showEditDialog.value = true
  selectedDashboardId.value = dashboard.id
}
const closeEditDialog = () => {
  showEditDialog.value = false
  selectedDashboardId.value = null
  editedDashboardName.value = ''
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
        <h3>{{ dashboard.name }}</h3>

        <button @click.prevent.stop="startEdit(dashboard)">Editar</button>

        <button @click.prevent.stop="deleteDashboard(dashboard.id)">Eliminar</button>
      </div>
    </div>
    <ModalComp
      ref="editDashboardModal"
      @close="closeEditDialog"
      :title="'Editar Dashboard'"
      :opened="showEditDialog"
    >
      <template v-if="selectedDashboardId !== null">
        <EditDashboard
          :dashboardId="selectedDashboardId"
          :originalName="editedDashboardName"
          @close-dialog="closeEditDialog"
        />
      </template>
    </ModalComp>
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
