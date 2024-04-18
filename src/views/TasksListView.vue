<script setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useRouter } from 'vue-router'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import TaskListColumn from '@/components/TaskListColumn.vue'
import EditTask from '@/components/EditTask.vue'
import ModalComp from '@/components/ModalComp.vue'

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
    title: 'Not Started',
    tasks: getNotStartedTasks
  },
  {
    id: 1,
    title: 'In Progress',
    tasks: getInProgressTasks
  },
  {
    id: 2,
    title: 'Completed',
    tasks: getCompletedTasks
  }
])
const showEditDialog = ref(false)
const selectedTaskId = ref(null)
const editDialogTitle = ref('')

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
  <div v-if="actualDashboard">
    <h2>Tareas de {{ actualDashboard.name }}</h2>

    <section class="columns">
      <TaskListColumn
        v-for="taskColumn in tasks"
        :key="taskColumn.id"
        :title="taskColumn.title"
        :tasks="taskColumn.tasks"
        @edit-task="handleEditTask"
        @remove-task="removeTask"
      />
    </section>
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
  </div>
  <form @submit.prevent="addNewTask()">
    <input type="text" v-model="newTaskTitle" placeholder="Nueva tarea..." />
    <button type="submit">Agregar Tarea</button>
  </form>
</template>

<style scoped>
.columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
