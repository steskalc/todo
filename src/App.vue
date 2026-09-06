<template>
  <AddNewTodo :tasks="tasks" @add-new-task="addNewTask" />
  <div class="row">
    <div class="column">
      <label class="text-subtitle2">ACTIVE - {{ todo }}</label>
      <div v-for="storedTask in tasks.filter((t) => t.done == false)">
        <TodoItem :title="storedTask.title" :done="storedTask.done" :id="storedTask.id"
          @update-task-status="updateTaskStatus" />
      </div>
    </div>
    <div class="column">
      <label class="text-subtitle2">COMPLETED - {{ completed }}</label>
      <div v-for="storedTask in tasks.filter((t) => t.done == true)">
        <TodoItem :title="storedTask.title" :done="storedTask.done" :id="storedTask.id"
          @update-task-status="updateTaskStatus" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import AddNewTodo from './AddNewTodo.vue'
import type { task } from './task.ts'

const stored = localStorage.getItem('tasks')
const tasks = ref<task[]>(stored ? JSON.parse(stored) : [])
const completed = ref(tasks.value.filter((storedTask) => storedTask.done === true).length)
const todo = ref(tasks.value.filter((storedTask) => storedTask.done === false).length)

const updateTaskStatus = (payload: { done: boolean, taskId: string }) => {
  let taskN = tasks.value.findIndex((storedTask) => storedTask.id === payload.taskId)
  if (taskN !== undefined) {
    const updated: task = {
      title: tasks.value![taskN]!.title,
      id: tasks.value![taskN]!.id,
      done: payload.done
    }
    tasks.value.splice(taskN, 1, updated)
  }
}

const addNewTask = (payload: task) => {
  tasks.value.push(payload)
}

watch(
  () => tasks.value,
  (tasks.value, (value) => {
    let stringified = JSON.stringify(value)
    console.log('---> value: ', value)
    localStorage.setItem('tasks', stringified)
  }), { deep: true })

</script>


<style scoped></style>
