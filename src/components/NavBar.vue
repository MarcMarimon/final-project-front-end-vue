<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'

const userStore = useUserStore()

const isUserLoggedIn = computed(() => !!userStore.user)

const signOut = () => {
  userStore.signOut()
}
</script>
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="!isUserLoggedIn" to="/signin">Sign In</router-link>
    <router-link v-if="!isUserLoggedIn" to="/signup">Sign Up</router-link>
    <button v-if="isUserLoggedIn" @click="signOut">Sign Out</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  padding: 10px;
}
</style>
