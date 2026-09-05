<template>
<tr>
    <h2>
        {{ props.title  }}
            <input type="checkbox" v-model="isDone"/>

    </h2>
</tr>
</template>
<script setup lang="ts">

import { v4 } from 'uuid';
import { ref } from 'vue';

const props = defineProps({
  title: String,
  done: Boolean,
  taskId: String
})

const isDone = ref(false)


</script>
<style scoped>
</style>