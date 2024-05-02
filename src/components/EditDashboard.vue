<script setup>
import { ref } from 'vue'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'

const props = defineProps({
  dashboardId: {
    type: Number,
    required: true
  },
  originalName: { type: String, required: true }
})

const emits = defineEmits(['close-dialog'])
const dashboardsStore = useDashboardsStore()
const editedName = ref(props.originalName)

const saveDashboardName = async () => {
  if (editedName.value.trim() !== '') {
    await dashboardsStore.updateDashboardById(props.dashboardId, {
      name: editedName.value.trim()
    })
    emits('close-dialog')
  }
}

const cancelEdit = () => {
  emits('close-dialog')
}
</script>

<template>
  <form @submit.prevent="saveDashboardName">
    <div class="edit-dashboard-container">
      <input
        type="text"
        v-model="editedName"
        class="edit-input"
        placeholder="Nuevo nombre del Dashboard"
      />
      <div class="button-container">
        <button type="submit" class="save-button">Guardar</button>
        <button @click="cancelEdit" class="cancel-button">Cancelar</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.edit-dashboard-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.edit-input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.save-button,
.cancel-button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-button {
  background-color: #007bff;
  color: #fff;
}

.save-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #ccc;
  color: #444;
}

.cancel-button:hover {
  background-color: #bbb;
}
</style>
