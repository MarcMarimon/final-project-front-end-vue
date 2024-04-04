<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useDashboardsStore } from '@/stores/dashboardsStore'

const userStore = useUserStore()
const tasksStore = useTasksStore()
const dashboardsStore = useDashboardsStore()
const isUserLoggedIn = computed(() => !!userStore.user)

const signOut = () => {
  userStore.signOut()
  tasksStore.clear()
  dashboardsStore.clear()
}
</script>
<template>
  <nav>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="isUserLoggedIn" to="/dashboard">Dashboard</router-link>
    </div>
    <div class="logs-buttons">
      <router-link v-if="!isUserLoggedIn" to="/signIn">Sign In</router-link>
      <router-link v-if="!isUserLoggedIn" to="/signUp">Sign Up</router-link>
      <button v-if="isUserLoggedIn" @click="signOut">Sign Out</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
}
.logs-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
}
</style>
