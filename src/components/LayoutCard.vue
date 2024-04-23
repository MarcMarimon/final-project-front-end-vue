<template>
  <main class="layout-card">
    <slot></slot>
  </main>
</template>

<style scoped>
.layout-card {
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.layout-card h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.layout-card form {
  width: 100%;
}

.layout-card .labels {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.layout-card .labels label {
  font-weight: bold;
  margin-bottom: 5px;
}

.layout-card .labels input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.layout-card button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.layout-card button:hover {
  background-color: #0056b3;
}

.layout-card .error-message {
  color: red;
  margin-top: 10px;
}
</style>
