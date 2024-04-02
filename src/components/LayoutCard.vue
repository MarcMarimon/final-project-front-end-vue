<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 400px;
  max-height: 600px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
