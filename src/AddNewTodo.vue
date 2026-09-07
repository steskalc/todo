<template>
    <form @submit.prevent="addTask" class="new-task-form row">
        <q-input class="task-input" outlined type="text" maxlength="100" v-model="taskTitle"
            placeholder="What is there to do?" />
        <button type="submit" class="submit-task text-h6">+ Add</button>
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
    width: 700px;
    flex: 1;
    background-color: white;
}

:deep(.task-input .q-field__control),
:deep(.task-input .q-field__marginal) {
    height: 50px;
    border-radius: 12px;
}

.submit-task {
    margin-left: 10px;
    border-radius: 12px;
    width: 80px;
    height: 50px;
    border: none;
    background-color: #92aff4;
    color: white;
}

.new-task-form {
    display: flex;
    width: 740px;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}
</style>