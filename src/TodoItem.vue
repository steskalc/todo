<template>
  <q-card flat bordered class="task-card flat bordered">
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
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: solid;
  border-width: 1px;
  border-color: #bac3cf;
  accent-color: #71cda7;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
}

.task-card {
  width: 350px;
  height: 50px;
  border-radius: 12px;
  margin-top: 10px;
  color: black;
  justify-content: center;
  box-shadow: none;
}
</style>