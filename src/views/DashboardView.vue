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
  <div class="dashboard-container">
    <h2 class="dashboard-container-title">Dashboard</h2>
    <div class="dashboard-wrapper">
      <div
        v-for="dashboard in dashboards"
        :key="dashboard.id"
        @click="openDashboardTasks(dashboard.id)"
      >
        <div class="dashboard-card">
          <h3>{{ dashboard.name }}</h3>

          <div class="dashboard-buttons">
            <button @click.prevent.stop="startEdit(dashboard)" class="edit-button">
              <font-awesome-icon icon="file-pen" />
            </button>
            <button @click.prevent.stop="deleteDashboard(dashboard.id)" class="delete-button">
              <font-awesome-icon icon="trash-can" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para editar dashboard -->
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

    <!-- Formulario para agregar nuevo dashboard -->
    <form @submit.prevent="addNewDashboard()" class="add-dashboard-form">
      <input
        type="text"
        v-model="newDashboardName"
        placeholder="Nuevo dashboard..."
        class="add-dashboard-input"
      />
      <button type="submit" class="add-dashboard-button">Agregar Dashboard</button>
    </form>
  </div>
</template>

<style scoped>
.dashboard-container {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}
.dashboard-container-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #242424;
}
.dashboard-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  max-height: 600px;
  overflow-y: auto;
}

.dashboard-card {
  border: none;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: #fff;
  cursor: pointer;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #eeeeee;
}

.dashboard-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #242424;
}

.dashboard-buttons button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dashboard-buttons button:hover {
  background-color: #0056b3;
}

.add-dashboard-form {
  display: flex;
  margin-top: 2rem;
}

.add-dashboard-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.add-dashboard-button {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-dashboard-button:hover {
  background-color: #0056b3;
}

@media (max-width: 1024px) {
  .dashboard-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .dashboard-card {
    margin-bottom: 1rem;
  }
  .add-dashboard-form {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .add-dashboard-input {
    width: 100%;
  }
  .add-dashboard-button {
    width: 100%;
    margin-left: 0;
  }
}
@media (max-width: 435px) {
  .dashboard-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
  .dashboard-card {
    margin-bottom: 1rem;
  }
  .add-dashboard-form {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .add-dashboard-input {
    width: 100%;
  }
  .add-dashboard-button {
    width: 100%;
    margin-left: 0;
  }
}
</style>
