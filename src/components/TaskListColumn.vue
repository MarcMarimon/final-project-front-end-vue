<script setup>
import { TASK_STATUS } from '@/utils/enums'

defineProps({
  tasks: Array,
  title: String
})

defineEmits(['edit-task', 'remove-task'])

const getStatusText = (statusValue) => {
  const statusFounded = TASK_STATUS.find((status) => status.value === statusValue)
  if (statusFounded) {
    return statusFounded.text
  } else {
    return ''
  }
}
</script>
<template>
  <ul>
    <li>{{ title }}</li>
    <li v-for="task in tasks" :key="task.id">
      <div>
        <span>{{ task.title }} </span>
        <button @click="$emit('edit-task', task.id)">Edit</button>
      </div>
      <span> {{ getStatusText(task.status) }} </span>
      <button @click="$emit('remove-task', task.id)">Eliminar</button>
    </li>
  </ul>
</template>
