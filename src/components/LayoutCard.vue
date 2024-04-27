<template>
  <main class="layout-card">
    <slot></slot>
  </main>
</template>

<style scoped>
.layout-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
}

.layout-card h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.layout-card form {
  margin-bottom: 20px;
}

.layout-card button {
  margin-top: 10px;
}
</style>
