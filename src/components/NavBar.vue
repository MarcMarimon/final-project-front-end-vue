<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useDashboardsStore } from '@/stores/dashboardsStore'
import { SIGN_TYPES } from '@/utils/enums.js'

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
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="logo">
        <img class="logo-desktop" src="@/assets/images/taskinator logo transp.png" />
        <img class="logo-mobile" src="@/assets/images/taskinator logo transp small.png"
      /></router-link>
    </div>

    <div class="navbar-actions">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="isUserLoggedIn" to="/dashboard" class="nav-link">Dashboard</router-link>
      <router-link v-if="!isUserLoggedIn" to="/signIn" class="nav-link">{{
        SIGN_TYPES.signIn.text
      }}</router-link>
      <router-link v-if="!isUserLoggedIn" to="/signUp" class="nav-link">{{
        SIGN_TYPES.signUp.text
      }}</router-link>
      <button v-if="isUserLoggedIn" @click="signOut" class="sign-out-button">
        {{ SIGN_TYPES.signOut.text }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  color: #fff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 80px;
}

.navbar-brand {
  font-size: 24px;
}

.logo {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  max-width: 220px;
  height: 35px;
  filter: brightness(160%);
}

.navbar-links {
  display: flex;
  align-items: center;
}

.nav-link {
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700; /* Cambia el color al pasar el mouse por encima */
}

.navbar-actions {
  display: flex;
  align-items: center;
}

.sign-out-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.sign-out-button:hover {
  background-color: #c82333; /* Cambia el color al pasar el mouse por encima */
}
.logo-mobile {
  display: none;
  height: 20px;
}
@media (max-width: 1024px) {
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
}
</style>
