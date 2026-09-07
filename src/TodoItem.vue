<template>
  <q-card flat bordered class="task-card flat bordered">
    <q-card-section>
      <input class="task-checkbox" type="checkbox" v-model="isDone" />
      <span :class="{ completed: isDone }">
        {{ props.todoItem.title }}
      </span>
    </q-card-section>

  </q-card>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import type { Task } from './task';
const props = defineProps<{
  todoItem: Task
}>()

const emit = defineEmits(['update-task-status'])

const isDone = computed({
  get() {
    return props.todoItem.done
  },
  set(newValue) {
    emit('update-task-status', { done: newValue, taskId: props.todoItem.taskId })
  }
})

</script>
<style scoped>
.task-checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: solid 1px #bac3cf;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 10px;
}

.task-checkbox:checked {
  border-color: #71cda7;
}

.task-checkbox:checked::after {
  content: "🗸";
  font-size: 14px;
  color: #71cda7;
  font-weight: bold;
  left: 50%;
  top: 50%;
  margin-left: 3px;
}

.completed {
  text-decoration: line-through;
  color: #bac3cf;
}

.task-card {
  width: 350px;
  min-height: 50px;
  border-radius: 12px;
  margin-top: 10px;
  color: black;
  box-shadow: none;
}
</style>