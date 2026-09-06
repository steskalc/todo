<template>
    <form @submit.prevent="addTask">
        <input type="text" maxlength="100" v-model="taskTitle" placeholder="What is there to do?" />
        <button type="submit">Add Task</button>
    </form>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import type { task } from './task'

const props = defineProps({
    tasks: Array<task>
})

const taskTitle = ref<string>('')

const addTask = () => {
    if (!taskTitle.value.length) return

    const newTask = {
        title: taskTitle.value,
        done: false,
        id: uuidv4()
    }
    props.tasks?.push(newTask)
    taskTitle.value = ''
    let stringified = JSON.stringify(props.tasks)
    localStorage.setItem('tasks', stringified)
    console.log('---> saved: ', localStorage.getItem('tasks'))
}

</script>