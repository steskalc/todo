<template>
  <AddNewTodo :tasks="tasks" />
  <li v-for="(storedTask, index) in tasks">
    <TodoItem :title="storedTask.title" :done="storedTask.done" :id="storedTask.id" />
    <button @click="removeTask(index)">X</button>
  </li>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TodoItem from './TodoItem.vue'
import AddNewTodo from './AddNewTodo.vue'
import type { task } from './task.ts'

const tasks = ref<task[]>([])

const removeTask = (index: number) => {
  tasks.value.splice(index, 1)
  let stringified = JSON.stringify(tasks.value)
  localStorage.setItem('tasks', stringified)
  console.log('---> saved: ', localStorage.getItem('tasks'))
}

onMounted(async () => {

  let storedTasks = localStorage.getItem('tasks')

  if (storedTasks) {
    try {
      console.log('---> stored tasks: ', storedTasks)
      tasks.value.push(JSON.parse(storedTasks))
    } catch (e) {
      console.log(`Failed to parse stored tasks: ${e}`)
    }
  }

})
</script>


<style scoped></style>
