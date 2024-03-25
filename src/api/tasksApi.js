import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
    const { data, error } = await supabase.from('tasks').select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data
}