<template>
  <h2>
    {{ props.title }}
    <input type="checkbox" v-model="isDone" />
  </h2>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
  title: String,
  done: Boolean,
  id: String
})

const isDone = ref(false)


</script>
<style scoped></style>