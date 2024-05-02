import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllDashboards, createDashboard, deleteDashboard, updateDashboard } from '@/api/dashboardsApi'
import { useUserStore } from '@/stores/userStore'
export const useDashboardsStore = defineStore('dashboards', () => {
    // State
    const dashboards = ref([])

    // Getters

    // Actions
    const fetchDashboards = async () => {
        try {
            dashboards.value = await fetchAllDashboards()
        } catch (error) {
            console.error(error)
        }
    }
    const clear = () => {
        dashboards.value = []
    }
    const addDashboard = async (name) => {
        try {
            const userStore = useUserStore()
            const userId = userStore.user.id
            const newDashboard = await createDashboard(name, userId)
            dashboards.value.push(newDashboard)
        } catch (error) {
            console.error(error)
        }
    }
    const removeDashboard = async (dashboardId) => {
        try {
            await deleteDashboard(dashboardId)
            dashboards.value = dashboards.value.filter(dashboard => dashboard.id !== dashboardId)
        } catch (error) {
            console.error(error)
        }
    }
    const updateDashboardById = async (dashboardId, newDashboard) => {
        try {
            const dashboardUpdated = await updateDashboard(dashboardId, newDashboard)
            const dashboardIndex = dashboards.value.findIndex(dashboard => dashboard.id === dashboardUpdated.id)
            if (dashboardIndex !== -1) {
                dashboards.value[dashboardIndex] = dashboardUpdated
            }
        } catch (error) {
            console.error(error)
        }
    }

    return {
        // State
        dashboards,
        // Getters
        // Actions
        fetchDashboards,
        clear,
        addDashboard,
        removeDashboard,
        updateDashboardById,
    }
})
