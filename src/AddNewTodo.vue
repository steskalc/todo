<template>
    <form @submit.prevent="addTask" class="new-task-form row">
        <q-input class="task-title" outlined type="text" maxlength="100" v-model="taskTitle"
            placeholder="What is there to do?" />
        <button type="submit">Add Task</button>
    </form>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

const emits = defineEmits(['add-new-task'])
const taskTitle = ref<string>('')
const addTask = () => {
    if (!taskTitle.value.length) return

    const newTask = {
        title: taskTitle.value,
        done: false,
        id: uuidv4()
    }

    taskTitle.value = ''
    emits('add-new-task', newTask)
}

</script>
<style scoped>
.task-title {
    width: 300px;
}

.new-task-form {
    align-content: center;
}
</style>