import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteTask, updateTask } from '@/api/tasksApi'
import { useUserStore } from '@/stores/userStore'

export const useTasksStore = defineStore('tasks', () => {
    // State
    const tasks = ref([])

    // Getters

    // Actions
    const fetchTasks = async () => {
        try {
            tasks.value = await fetchAllTasks()
        } catch (error) {
            console.error(error)
        }
    }
    const clear = () => {
        tasks.value = []
    }
    const addTask = async (title, dashboardId) => {
        try {
            const userStore = useUserStore()
            const userId = userStore.user.id
            const newTask = await createTask(title, dashboardId, userId)
            tasks.value.push(newTask)
        } catch (error) {
            console.error(error)
        }
    }
    const removeTask = async (taskId) => {
        try {
            await deleteTask(taskId)
            tasks.value = tasks.value.filter(task => task.id !== taskId)
        } catch (error) {
            console.error(error)
        }
    }


    const updateTaskById = async (taskId, newTask) => {
        try {
            await updateTask(taskId, newTask)
            const taskIndex = tasks.value.findIndex(task => task.id === taskId)
            if (taskIndex !== -1) {
                tasks.value[taskIndex] = newTask
            }
        } catch (error) {
            console.error(error)
        }
    }
    return {
        // State
        tasks,
        // Getters
        // Actions
        fetchTasks,
        clear,
        addTask,
        removeTask,
        updateTaskById
    }
})
