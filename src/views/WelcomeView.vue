<script setup>
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
const router = useRouter()

const goToDashboard = () => {
  router.push({ path: '/dashboard' })
}
</script>

<template>
  <main class="welcome-container">
    <h1 class="welcome-title">Welcome{{ userName ? ', ' + userName : '' }}!</h1>
    <p class="welcome-text">Start working on your tasks!</p>
    <button class="dashboard-button" @click="goToDashboard">My Dashboard</button>
  </main>
</template>

<style scoped>
.welcome-container {
  text-align: center;
  margin-top: 4rem;
}

.welcome-title {
  font-size: 2.5rem;
  color: #242424;
}

.welcome-text {
  font-size: 1.2rem;
  color: #555;
  margin-top: 1.5rem;
}

.dashboard-button {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dashboard-button:hover {
  background-color: #0056b3;
}
@media (max-width: 1024px) {
  .welcome-container {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .welcome-title {
    font-size: 2rem;
  }

  .welcome-text {
    font-size: 1rem;
  }

  .dashboard-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
