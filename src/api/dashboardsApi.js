import { supabase } from '@/api/supabase'

export const fetchAllDashboards = async () => {
    const { data, error } = await supabase.from('dashboards').select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export const createDashboard = async (name, userID) => {
    const { data, error } = await supabase.from('dashboards').insert({
        name: name,
        user_id: userID
    })
        .select();
    if (error) {
        throw new Error(error.message)
    }
    return data[0]
}

export const deleteDashboard = async (dashboardId) => {
    const { error } = await supabase
        .from('dashboards')
        .delete()
        .eq('id', dashboardId)
    if (error) {
        throw new Error(error.message)
    }
}

export const updateDashboard = async (dashboardId, dashboard) => {
    const { error, data } = await supabase
        .from('dashboards')
        .update(dashboard)
        .eq('id', dashboardId)
        .select();
    if (error) {
        throw new Error(error.message)
    }
    return data[0]
}