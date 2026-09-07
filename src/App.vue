<template>
  <div class="todo-container">
    <AddNewTodo :tasks="tasks" @add-new-task="addNewTask" />

    <div class="todo-items row">
      <div class="column">
        <label class="task-count">ACTIVE - {{ active }}</label>
        <div v-for="storedTask in tasks.filter((t) => t.done === false)" :key="storedTask.taskId">
          <TodoItem :title="storedTask.title" :done="storedTask.done" :taskId="storedTask.taskId"
            @update-task-status="updateTaskStatus" />
        </div>
      </div>
      <div class="column">
        <label class="task-count">COMPLETED - {{ completed }}</label>
        <div v-for="storedTask in tasks.filter((t) => t.done === true)" :key="storedTask.taskId">
          <TodoItem :title="storedTask.title" :done="storedTask.done" :taskId="storedTask.taskId"
            @update-task-status="updateTaskStatus" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import TodoItem from './TodoItem.vue'
import AddNewTodo from './AddNewTodo.vue'
import type { task } from './task.ts'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const stored = localStorage.getItem('tasks')
const tasks = ref<task[]>(stored ? JSON.parse(stored) : [])
const completed = computed(() => tasks.value.filter((t) => t.done === true).length)
const active = computed(() => tasks.value.filter((t) => t.done === false).length)

const updateTaskStatus = (payload: { done: boolean, taskId: string }) => {
  let taskN = tasks.value.findIndex((storedTask) => storedTask.taskId === payload.taskId)
  if (taskN !== undefined) {
    const updated: task = {
      title: tasks.value![taskN]!.title,
      done: payload.done,
      taskId: tasks.value![taskN]!.taskId
    }

    tasks.value[taskN] = updated
  }
}

const addNewTask = (payload: task) => {

  const match = tasks.value.find((t) => t.title == payload.title)

  if (match) {
    $q.notify({ message: 'Task already exists.', color: 'negative' })
    return
  }

  tasks.value.push(payload)
}

watch(
  () => tasks.value,
  (tasks.value, (value) => {
    let stringified = JSON.stringify(value)
    localStorage.setItem('tasks', stringified)
  }),
  { deep: true })

</script>


<style>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-items {
  width: 740px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 40px;
}

.task-count {
  align-self: stretch;
  margin-bottom: 10px;
  color: #697587;
  text-align: left;
}

.column {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  background-color: #f9fafc;
}
</style>
