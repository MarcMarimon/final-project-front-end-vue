<script setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useRouter } from 'vue-router'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import TaskListColumn from '@/components/TaskListColumn.vue'
import EditTask from '@/components/EditTask.vue'
import ModalComp from '@/components/ModalComp.vue'
import { TASK_STATUS_DIC } from '@/utils/enums.js'

const router = useRouter()
const tasksStore = useTasksStore()
const newTaskTitle = ref('')
const { actualDashboardId, getNotStartedTasks, getInProgressTasks, getCompletedTasks } =
  storeToRefs(tasksStore)
const dashboardsStore = useDashboardsStore()
const { dashboards } = storeToRefs(dashboardsStore)
const editTaskModal = ref(null)

const tasks = ref([
  {
    id: 0,
    title: TASK_STATUS_DIC.NOT_STARTED.text,
    value: TASK_STATUS_DIC.NOT_STARTED.value,
    tasks: getNotStartedTasks
  },
  {
    id: 1,
    title: TASK_STATUS_DIC.IN_PROGRES.text,
    value: TASK_STATUS_DIC.IN_PROGRES.value,
    tasks: getInProgressTasks
  },
  {
    id: 2,
    title: TASK_STATUS_DIC.COMPLETED.text,
    value: TASK_STATUS_DIC.COMPLETED.value,
    tasks: getCompletedTasks
  }
])
const showEditDialog = ref(false)
const selectedTaskId = ref(null)
const editDialogTitle = ref('')
const taskIdOnMove = ref('')

const handleEditTask = (taskId) => {
  selectedTaskId.value = taskId
  editDialogTitle.value = 'Editar Tarea'
  showEditDialog.value = true
}

const handleEditModalClose = () => {
  showEditDialog.value = false
  selectedTaskId.value = null
  editDialogTitle.value = ''
}
const handleSaveTaskIdMoved = (taskId) => {
  taskIdOnMove.value = taskId
}
const handleMoveTask = async (event) => {
  const newTask = { status: event.targetStatus }
  try {
    await tasksStore.updateTaskById(taskIdOnMove.value, newTask)
  } catch (error) {
    console.error(error)
  } finally {
    taskIdOnMove.value = ''
  }
}
const actualDashboard = computed(() => {
  return dashboards.value.find((dashboard) => dashboard.id === actualDashboardId.value)
})

const addNewTask = async () => {
  if (newTaskTitle.value.trim() !== '') {
    await tasksStore.addTask(newTaskTitle.value, actualDashboardId.value)
    newTaskTitle.value = ''
  }
}

const removeTask = async (taskId) => {
  await tasksStore.removeTask(taskId)
}

onMounted(async () => {
  await dashboardsStore.fetchDashboards()
  tasksStore.setActualDashboard(parseInt(router.currentRoute.value.params.dashboardId))
  await tasksStore.fetchTasks()
})
</script>

<template>
  <div v-if="actualDashboard" class="task-list-view">
    <h2 class="task-list-title">Tareas de {{ actualDashboard.name }}</h2>

    <section class="task-columns">
      <TaskListColumn
        v-for="taskColumn in tasks"
        :key="taskColumn.id"
        :title="taskColumn.title"
        :tasks="taskColumn.tasks"
        :columnId="taskColumn.value"
        @edit-task="handleEditTask"
        @remove-task="removeTask"
        @move-task="handleMoveTask"
        @save-task-id-moved="handleSaveTaskIdMoved"
      />
    </section>

    <!-- Modal para editar tarea -->
    <ModalComp
      ref="editTaskModal"
      @close="handleEditModalClose"
      :title="editDialogTitle"
      :opened="showEditDialog"
    >
      <template v-if="selectedTaskId !== null">
        <EditTask :taskId="selectedTaskId" @close-dialog="handleEditModalClose" />
      </template>
    </ModalComp>

    <!-- Formulario para agregar nueva tarea -->
    <form @submit.prevent="addNewTask()" class="add-task-form">
      <input
        type="text"
        v-model="newTaskTitle"
        placeholder="Nueva tarea..."
        class="add-task-input"
      />
      <button type="submit" class="add-task-button">Agregar Tarea</button>
    </form>
  </div>
</template>

<style scoped>
.task-list-view {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  overflow: hidden;
}
.task-list-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #242424;
}

.task-columns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-height: 1300px;
  overflow-y: auto;
}

.add-task-form {
  margin-top: 2rem;
}

.add-task-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.add-task-button {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-task-button:hover {
  background-color: #0056b3;
}

@media (max-width: 1024px) {
  .task-columns {
    flex-direction: column;
    max-height: 500px;
  }
  .add-task-form {
    margin-top: 1rem;
  }
}
@media (max-width: 1024px) {
  .add-task-input {
    width: 100%;
    margin-bottom: 5px;
  }
  .add-task-button {
    width: 100%;
    margin-left: 0;
  }
}
</style>
