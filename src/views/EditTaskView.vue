<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useRouter } from 'vue-router'
import { TASK_STATUS } from '@/utils/enums.js'

const router = useRouter()
const tasksStore = useTasksStore()

const editedTaskTitle = ref('')
const editedTaskStatus = ref('')

const saveChanges = async () => {
  const taskId = router.currentRoute.value.params.taskId
  const newTask = { status: editedTaskStatus.value, title: editedTaskTitle.value }
  await tasksStore.updateTaskById(taskId, newTask)
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div>
    <h2>Editar Tarea</h2>
    <form @submit.prevent="saveChanges()">
      <label>Nombre de la Tarea:</label>
      <input type="text" v-model="editedTaskTitle" />
      <label>Estado:</label>
      <select v-model="editedTaskStatus">
        <option v-for="status in TASK_STATUS" :key="status" :value="status">{{ status }}</option>
      </select>
      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<style scoped></style>
