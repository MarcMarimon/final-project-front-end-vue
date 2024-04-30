<template>
  <LayoutCard>
    <h1>{{ SIGN_TYPES[signType].text }} please</h1>
    <form @submit.prevent.stop="_handleClick">
      <div class="labels">
        <label v-if="signType === 'signUp'">
          User Name: <input type="text" v-model="user" />
          <span class="error-message">{{ userError }}</span>
        </label>
        <label>
          Email: <input type="text" v-model="email" />
          <span class="error-message">{{ emailError }}</span>
        </label>
        <label>
          Password: <input type="password" v-model="password" />
          <span class="error-message">{{ passwordError }}</span>
        </label>
        <label v-if="signType === 'signUp'">
          Confirm Password: <input type="password" v-model="confirmPassword" />
          <span class="error-message">{{ confirmPasswordError }}</span>
        </label>
        <span class="error-message">{{ generalError }}</span>
      </div>
      <button type="submit">{{ SIGN_TYPES[signType].text }}</button>
    </form>
  </LayoutCard>
</template>

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
const email = ref('')
const confirmPassword = ref('')

const userError = ref('')
const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const generalError = ref('')

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

const validatePassword = (password) => {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
  return passwordPattern.test(password)
}

const _handleClick = async () => {
  userError.value = ''
  emailError.value = ''
  passwordError.value = ''
  confirmPasswordError.value = ''
  generalError.value = ''

  let hasErrors = false

  if (!user.value && props.signType === 'signUp') {
    userError.value = "This field can't be empty."
    hasErrors = true
  }

  if (!email.value || !validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.'
    hasErrors = true
  }

  if (!password.value) {
    passwordError.value = 'Please enter a password.'
    hasErrors = true
  } else if (!validatePassword(password.value)) {
    passwordError.value =
      'Password must contain at least 10 characters, one uppercase letter, one number, and one special character.'
    hasErrors = true
  }

  if (props.signType === 'signUp' && password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match.'
    hasErrors = true
  }

  if (!hasErrors) {
    try {
      if (props.signType === 'signUp') {
        await userStore.signUp(email.value, password.value, user.value)
      } else {
        await userStore.signIn(email.value, password.value)
      }
      router.push({ name: 'welcome' })
    } catch (e) {
      generalError.value = 'An error occurred. Please try again later.'
      console.log(e)
    } finally {
      user.value = ''
      password.value = ''
      email.value = ''
      confirmPassword.value = ''
    }
  }
}
</script>

<style scoped>
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
  margin-top: 5px;
}
</style>
