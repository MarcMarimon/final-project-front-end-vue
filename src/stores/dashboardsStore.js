import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllDashboards } from '@/api/dashboardsApi'

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

    return {
        // State
        dashboards,
        // Getters
        // Actions
        fetchDashboards,
        clear
    }
})
