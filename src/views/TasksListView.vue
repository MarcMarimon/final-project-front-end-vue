<script setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore.js'
import { useRouter } from 'vue-router'
import { useDashboardsStore } from '@/stores/dashboardsStore.js'
import TaskListColumn from '@/components/TaskListColumn.vue'
import EditTaskView from '@/views/EditTaskView.vue'

const router = useRouter()
const tasksStore = useTasksStore()
const newTaskTitle = ref('')
const { actualDashboardId, getNotStartedTasks, getInProgressTasks, getCompletedTasks } =
  storeToRefs(tasksStore)
const dashboardsStore = useDashboardsStore()
const { dashboards } = storeToRefs(dashboardsStore)

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

const openEditDialog = (taskId) => {
  selectedTaskId.value = taskId
  showEditDialog.value = true
}

const closeEditDialog = () => {
  showEditDialog.value = false
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
/*const openEditView = (taskId) => {
  router.push({ name: 'editTask', params: { taskId } })
}*/

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
        @edit-task="openEditDialog"
        @remove-task="removeTask"
      />
    </section>
    <EditTaskView v-if="showEditDialog" :taskId="selectedTaskId" @close-dialog="closeEditDialog" />
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
