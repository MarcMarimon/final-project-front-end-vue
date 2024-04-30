<template>
  <main>
    <h1>¡Bienvenido{{ userName ? ', ' + userName : '' }}!</h1>
    <p>¡Empieza a trabajar con tus tareas!</p>
  </main>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { userName } = storeToRefs(userStore)
</script>

<style scoped></style>
