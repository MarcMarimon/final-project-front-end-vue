<script setup>
import SignForm from '@/components/SignForm.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const method = ref(route.name)

watch(
  () => route.name,
  (name) => {
    method.value = name
  }
)
</script>

<template>
  <SignForm :signType="method" />
</template>
