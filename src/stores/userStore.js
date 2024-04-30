import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn, signOutUser } from '@/api/userApi'


export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)

  // Getters
  const userName = computed(() => {
    return user.value?.user_metadata.user_name
  })
  // Actions
  async function fetchUser() {
    try {
      user.value = await fetchActualUser()
    } catch (error) {
      if (error.code === '401') {
        user.value = null
        return
      }
    }
  }

  async function signUp(email, password, userName) {
    try {
      user.value = await createNewUser(email, password, userName)

    } catch (error) {
      console.error(error)
    }
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password)
    } catch (error) {
      console.error(error)
    }
  }
  async function signOut() {
    try {
      await signOutUser()
      user.value = null
    } catch (error) {
      console.error(error)
    }
  }
  return {
    // State
    user,
    // Getters
    userName,
    // Actions
    fetchUser,
    signUp,
    signIn,
    signOut
  }
})
