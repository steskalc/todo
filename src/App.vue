<template>
  <form @submit.prevent="addTask">
    <input type="text" maxlength="100" v-model="taskTitle" placeholder="What is there to do?" />
    <button type="submit">Add Task</button>
  </form>
  <li v-for="(storedTask, index) in tasks">
    <TaskItem :title="storedTask.title" :done="storedTask.done" :id="storedTask.id" />
    <button @click="removeTask(index)">X</button>
  </li>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { onMounted, ref } from 'vue'
import TaskItem from './TaskItem.vue'

interface task {
  title: string,
  done: boolean,
  id: string
}

const tasks = ref<task[]>([])
const taskTitle = ref<string>('')

const addTask = () => {
  const newTask = {
    title: taskTitle.value,
    done: false,
    id: uuidv4()
  }
  tasks.value.push(newTask)
  taskTitle.value = ''
  save()
}

const removeTask = (index: number) => {
  tasks.value.splice(index, 1)
  save()
}

const save = () => {
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
