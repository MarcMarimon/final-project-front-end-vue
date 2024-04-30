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
  <section>
    <SignForm :signType="method" />
  </section>
</template>
<style scoped>
section {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}
</style>
