<template>
  <q-card>
    {{ props.title }}
    <input type="checkbox" v-model="isDone" />
  </q-card>
</template>


<script setup lang="ts">

import { computed } from 'vue';
const props = defineProps({
  title: String,
  done: Boolean,
  id: String,
})

const emit = defineEmits(['update-task-status'])

const isDone = computed({
  get() {
    return props.done
  },
  set(newValue) {
    emit('update-task-status', { done: newValue, taskId: props.id })
  }
})

</script>
<style scoped></style>