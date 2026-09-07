<template>
  <q-card class="task-card flat bordered">
    <q-card-section>
      <input type="checkbox" v-model="isDone" class="task-checkbox" />
      {{ props.title }}
    </q-card-section>

  </q-card>
</template>


<script setup lang="ts">

import { computed } from 'vue';
const props = defineProps({
  title: String,
  done: Boolean,
  taskId: String,
})

const emit = defineEmits(['update-task-status'])

const isDone = computed({
  get() {
    return props.done
  },
  set(newValue) {
    emit('update-task-status', { done: newValue, taskId: props.taskId })
  }
})

</script>
<style scoped>
.task-checkbox {
  border-radius: 50%;
}

.task-card {
  width: 50%;
  height: 50px;
  border-radius: 12px;
  margin-left: 50px;
  margin-top: 10px;
  background-color: white;
  color: black;
  justify-content: center;
  box-shadow: none;
}
</style>