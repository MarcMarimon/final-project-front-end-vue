<script setup>
import { ref } from 'vue'

const { tasks, title } = defineProps({
  tasks: { type: Array, required: true },
  title: { type: String, required: true }
})
const myEmit = ref(null)

const customEmit = (event, data) => {
  if (myEmit.value) {
    myEmit.value(event, data)
  }
}
const draggedTask = ref(null)

const handleDragStart = (event, taskId) => {
  event.dataTransfer.setData('TaskId', taskId.toString())
  draggedTask.value = taskId
}

const hadleDragEnd = (event) => {
  event.preventDefault()
}

const handleDrop = (event) => {
  console.log('handleDrop called')
  event.preventDefault()
  const targetStatus = event.target.closest('.task-list-column').getAttribute('data-status')
  console.log('Target status:', targetStatus)

  if (draggedTask.value) {
    console.log('Dragged task exists')
    const taskId = parseInt(draggedTask.value)
    const updatedTask = tasks.value.find((task) => task.id === taskId)
    if (updatedTask) {
      console.log('Updating task status')
      updatedTask.status = targetStatus
      customEmit('move-task', { taskId, targetStatus })
    } else {
      console.log('Task not found')
    }
    draggedTask.value = null
  } else {
    console.log('No dragged task')
  }
}
</script>

<template>
  <ul class="task-list-column" :data-status="title.toLowerCase()">
    <li class="column-title">{{ title }}</li>
    <li
      v-for="task in tasks"
      :key="task.id"
      class="task-item"
      draggable="true"
      @dragstart="(event) => handleDragStart(event, task.id)"
      @dragend="hadleDragEnd"
      @dragover.prevent
      @drop="handleDrop"
    >
      <div class="task-details">
        <span>{{ task.title }}</span>
      </div>
      <div class="button-container">
        <button @click="$emit('edit-task', task.id)" class="edit-button">
          <font-awesome-icon icon="pen-to-square" />
        </button>

        <button @click="$emit('remove-task', task.id)" class="delete-button">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.task-list-column {
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 0;
  min-width: 300px;
  height: fit-content;
}

.column-title {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  background-color: #f8f9fa;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-size: 1.1rem;
}
.task-item:hover {
  background-color: #eeeeee;
}
.task-item:last-of-type {
  border-bottom: none;
}
.task-details {
  flex-grow: 1;
}

.edit-button,
.delete-button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s linear;
  background-color: #fff;
  color: #007bff;
}
.edit-button:hover,
.delete-button:hover {
  background-color: #0056b3;
  color: #fff;
}
.status-text {
  font-style: italic;
  color: #6c757d;
}
</style>
