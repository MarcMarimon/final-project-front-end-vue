import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteTask, updateTask } from '@/api/tasksApi'
import { useUserStore } from '@/stores/userStore'
import { useDashboardsStore } from '@/stores/dashboardsStore'

export const useTasksStore = defineStore('tasks', () => {
    // State
    const tasks = ref([])
    const actualDashboardId = ref(-1)

    // Getters
    const tasksByDashboardId = computed(() => {
        const dashboardStore = useDashboardsStore()
        const dashboardIds = dashboardStore.dashboards.map(db => db.id)
        const res = {};
        dashboardIds.forEach(dashboardId => {
            res[dashboardId] = tasks.value.filter(task => task.dashboard_id === dashboardId)
        })

        return res
    })

    const getNotStartedTasks = computed(() => {
        return tasksByDashboardId.value[actualDashboardId.value]?.filter(task => task.status === 'NOT_STARTED') || []
    })
    const getInProgressTasks = computed(() => {
        return tasksByDashboardId.value[actualDashboardId.value]?.filter(task => task.status === 'IN_PROGRES') || []
    })
    const getCompletedTasks = computed(() => {
        return tasksByDashboardId.value[actualDashboardId.value]?.filter(task => task.status === 'COMPLETED') || []
    })
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
            const updatedTask = await updateTask(taskId, newTask)
            const taskIndex = tasks.value.findIndex(task => task.id === updatedTask.id)
            if (taskIndex !== -1) {
                tasks.value[taskIndex] = updatedTask
            }
        } catch (error) {
            console.error(error)
        }
    }

    const setActualDashboard = (dashboardId) => {
        actualDashboardId.value = dashboardId
    }

    return {
        // State
        tasks,
        actualDashboardId,
        // Getters
        tasksByDashboardId,
        getNotStartedTasks,
        getInProgressTasks,
        getCompletedTasks,
        // Actions
        fetchTasks,
        clear,
        addTask,
        removeTask,
        updateTaskById,
        setActualDashboard
    }
})
