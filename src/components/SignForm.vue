<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import { SIGN_TYPES } from '@/utils/enums.js'

import LayoutCard from '@/components/LayoutCard.vue'

const props = defineProps({
  signType: String
})

const router = useRouter()
const userStore = useUserStore()

const user = ref('')
const password = ref('')

const _handleClick = async () => {
  try {
    await userStore[props.signType](user.value, password.value)
    router.push({ name: 'welcome' })
  } catch (e) {
    console.log(e)
  } finally {
    user.value = ''
    password.value = ''
  }
}
</script>

<template>
  <LayoutCard>
    <h1>{{ SIGN_TYPES[signType].text }} please</h1>
    <div class="labels">
      <label> User: <input type="text" v-model="user" /> </label>
      <label> Password: <input type="password" v-model="password" /> </label>
    </div>
    <button @click="_handleClick">{{ SIGN_TYPES[signType].text }}</button>
  </LayoutCard>
</template>

<style scoped>
/* Estilos para el formulario de inicio de sesión */
.labels {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.labels label {
  font-weight: bold;
  margin-bottom: 5px;
}

.labels input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
