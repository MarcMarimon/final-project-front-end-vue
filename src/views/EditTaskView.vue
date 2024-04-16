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
onMounted(async () => {
  if (!tasks.value.length) {
    await tasksStore.fetchTasks()
  }

  const task = tasks.value.find((task) => task.id == props.taskId)
  if (task) {
    editedTaskTitle.value = task.title
    editedTaskStatus.value = task.status
  }
})
</script>

<template>
  <div class="edit-task-dialog">
    <div class="modal-content">
      <button class="close-button" @click="closeDialog">×</button>
      <h2>Editar Tarea</h2>
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
    </div>
  </div>
</template>

<style scoped>
.edit-task-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: auto;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 20px;
}

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
