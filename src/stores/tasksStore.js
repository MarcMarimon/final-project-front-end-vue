import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks } from '@/api/tasksApi'

export const useTasksStore = defineStore('tasks', () => {
    // State
    const tasks = ref([])

    // Getters

    // Actions
    function fetchTasks() {
        try {
            tasks.value = fetchAllTasks()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        // State
        tasks,
        // Getters
        // Actions
        fetchTasks
    }
})