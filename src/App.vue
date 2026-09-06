<template>
  <AddNewTodo :tasks="tasks" />
  <div v-for="storedTask in tasks">
    <TodoItem :tasks="tasks" :title="storedTask.title" :done="storedTask.done" :id="storedTask.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TodoItem from './TodoItem.vue'
import AddNewTodo from './AddNewTodo.vue'
import type { task } from './task.ts'

const stored = localStorage.getItem('tasks')
const tasks = ref<task[]>(stored ? JSON.parse(stored) : [])

</script>


<style scoped></style>
