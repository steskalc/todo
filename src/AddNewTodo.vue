<template>
    <form @submit.prevent="addTask" class="new-task-form row">
        <q-input class="task-input" outlined type="text" maxlength="100" v-model="taskTitle"
            placeholder="What is there to do?" />
        <button type="submit" class="submit-task">+ Add</button>
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
        taskId: uuidv4()
    }

    taskTitle.value = ''
    emits('add-new-task', newTask)
}

</script>
<style scoped>
.task-input {
    width: 60%;
}

.submit-task {
    margin-left: 10px;
    border-radius: 12px;
    width: 100px;
    border: none;
    background-color: #92aff4;
    color: white;
    font-weight: bold;
}

.submit-task:hover {
    background-color: #5b8bfc;
}

.new-task-form {
    justify-content: center;
    padding-top: 30px;
}
</style>