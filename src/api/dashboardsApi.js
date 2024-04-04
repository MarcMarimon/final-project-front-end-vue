import { supabase } from '@/api/supabase'

export const fetchAllDashboards = async () => {
    const { data, error } = await supabase.from('dashboards').select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data
}