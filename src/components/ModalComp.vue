<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  opened: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['open', 'close'])

const modalDialog = ref(null)

const openModal = () => {
  if (modalDialog.value) {
    modalDialog.value.showModal()
    emits('open')
  }
}

const closeModal = () => {
  if (modalDialog.value) {
    modalDialog.value.close()
    emits('close')
  }
}
watch(
  () => props.opened,
  (value) => {
    if (value) {
      openModal()
    } else {
      closeModal()
    }
  }
)
</script>
<template>
  <dialog ref="modalDialog" class="modal">
    <div class="edit-task-dialog">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
        <h2>{{ title }}</h2>
        <slot />
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.edit-task-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 500px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: #555;
}

.close-button:hover {
  color: #333;
}

@media (max-width: 600px) {
  .modal-content {
    width: 90%;
    max-width: 100%;
  }
}
</style>
