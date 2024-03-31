import { supabase } from '@/api/supabase'

export const fetchActualUser = async () => {
    const { data } = await supabase.auth.getSession()
    return data?.session?.user || null
}

export const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export const logIn = async (email, password) => {
    const {
        data: { user },
        error
    } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        throw new Error(error.message)
    }

    return user
}
export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw new Error(error.message)
    }
}