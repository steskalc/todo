<template>
  <span>
    {{ props.title }}
    <input type="checkbox" v-model="isDone" />
  </span>
</template>
<script setup lang="ts">

import { computed, ref, watch } from 'vue';
import type { task } from './task';
const props = defineProps({
  title: String,
  done: Boolean,
  id: String,
  tasks: Array<task>
})

const emit = defineEmits(['update:done'])

const isDone = computed({
  get() {
    return props.done
  },
  set(newValue) {
    emit('update:done', newValue)
    console.log('---> tasks: ', props.tasks)
    console.log('---> title: ', props.title)
    let record = props.tasks?.findIndex((storedTask) => storedTask.id === props.id)
    console.log('---> id: ', props.id)
    console.log('---> record: ', record)
    if (record !== undefined) {
      console.log('---> record: ', props.tasks![record])

      props.tasks![record]!.done = newValue
      let stringified = JSON.stringify(props.tasks)
      localStorage.setItem('tasks', stringified)
      console.log('---> saved: ', localStorage.getItem('tasks'))
    }
  }
})

// const removeTask = (id) => {
//   tasks.value.splice(index, 1)
//   let stringified = JSON.stringify(tasks.value)
//   localStorage.setItem('tasks', stringified)
//   console.log('---> saved: ', localStorage.getItem('tasks'))
// }



</script>
<style scoped></style>