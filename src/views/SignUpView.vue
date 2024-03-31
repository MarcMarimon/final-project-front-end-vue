<template>
  <main>
    <h1>Sign Up</h1>
    <label>Email: <input type="email" v-model="email" /></label>
    <label>Password: <input type="password" v-model="password" /></label>
    <button @click="signUp">Sign Up</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const email = ref('')
const password = ref('')
const router = useRouter()

const signUp = async () => {
  try {
    await userStore.signUp(email.value, password.value)
    router.push({ name: 'welcome' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped></style>
