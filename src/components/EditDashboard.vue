<script setup>
import { ref, defineProps, defineEmits } from 'vue'
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
  <div>
    <input type="text" v-model="editedName" placeholder="Nuevo nombre del Dashboard" />
    <button @click="saveDashboardName">Guardar</button>
    <button @click="cancelEdit">Cancelar</button>
  </div>
</template>
