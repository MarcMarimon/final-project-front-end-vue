<script setup>
defineProps({
  tasks: { type: Array, required: true },
  title: { type: String, required: true }
})

defineEmits(['edit-task', 'remove-task'])
</script>
<template>
  <ul class="task-list-column">
    <li class="column-title">{{ title }}</li>
    <li v-for="task in tasks" :key="task.id" class="task-item">
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
}

.edit-button {
  background-color: #ffc107;
  color: #212529;
}

.delete-button {
  background-color: #e91a2f;
  color: #fff;
}
.edit-button:hover {
  background-color: #ffc10780;
}
.delete-button:hover {
  background-color: #e91a2f93;
}
.status-text {
  font-style: italic;
  color: #6c757d;
}
</style>
