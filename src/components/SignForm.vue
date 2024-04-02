<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'

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
    <h1>{{ signType }} please</h1>
    <div class="labels">
      <label> User: <input type="text" v-model="user" /> </label>
      <label> Password: <input type="password" v-model="password" /> </label>
    </div>
    <button @click="_handleClick">{{ signType }}</button>
  </LayoutCard>
</template>

<style scoped>
.labels {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 30px;
}
.labels input {
  width: 100%;
}
</style>
