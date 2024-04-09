import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
    const { data, error } = await supabase.from('tasks').select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export const createTask = async (title, dashboardId, userId) => {

    const { error, data } = await supabase
        .from('tasks')
        .insert({
            title: title,
            dashboard_id: dashboardId,
            user_id: userId
        })
        .select();
    if (error) {
        throw new Error(error.message)
    }
    return data[0]
}
export const deleteTask = async (taskId) => {
    const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)

    if (error) {
        throw new Error(error.message)
    }
}

export const updateTask = async (taskId, task) => {
    const { error, data } = await supabase
        .from('tasks')
        .update(task)
        .eq('id', taskId)
        .select();
    if (error) {
        throw new Error(error.message)
    }
    return data[0]
}
