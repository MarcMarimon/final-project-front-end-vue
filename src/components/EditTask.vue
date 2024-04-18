<script setup>
import { ref, onMounted } from 'vue'
import { useTasksStore } from '@/stores/tasksStore.js'
import { TASK_STATUS } from '@/utils/enums.js'
import { storeToRefs } from 'pinia'

const $emit = defineEmits(['close-dialog'])

const props = defineProps({
  taskId: Number
})

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const editedTaskTitle = ref('')
const editedTaskStatus = ref('')

const saveChanges = async () => {
  const newTask = { status: editedTaskStatus.value, title: editedTaskTitle.value }
  await tasksStore.updateTaskById(props.taskId, newTask)
  closeDialog()
}
const closeDialog = () => {
  $emit('close-dialog')
}

const _setSelectedTask = (taskId) => {
  const task = tasks.value.find((task) => task.id === taskId)

  if (task) {
    editedTaskTitle.value = task.title
    editedTaskStatus.value = task.status
  }
}

onMounted(() => {
  _setSelectedTask(props.taskId)
})
</script>

<template>
  <form @submit.prevent="saveChanges()">
    <div class="label-input-container">
      <label>Nombre de la Tarea:</label>
      <input type="text" v-model="editedTaskTitle" />
    </div>
    <div class="label-input-container">
      <label>Estado:</label>
      <select v-model="editedTaskStatus">
        <option v-for="status in TASK_STATUS" :key="status.value" :value="status.value">
          {{ status.text }}
        </option>
      </select>
    </div>
    <div class="button-container">
      <button type="submit">Guardar Cambios</button>
    </div>
  </form>
</template>

<style scoped>
.label-input-container {
  margin-bottom: 15px;
  display: flex;
}

.label-input-container label {
  margin-bottom: 5px;
}

.label-input-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
