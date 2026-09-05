
<template>
  <form @submit.prevent="addTask">
    <tr>
    <input type="text" maxlength="100" v-model="taskTitle" placeholder="What is there to do?"/>
    <button type="submit">Add Task</button>
  </tr>
  </form>
  <label>
    <v-for tasks in localStorage>
      
    </v-for>
  </label>
</template>

<script setup lang="ts">
import {v4 as uuidv4 } from 'uuid'
import {computed, onMounted, ref } from 'vue'

// mounted: localstorage.get('tasks')
// json parse
// for task in tasks, populate li
</script>


<style scoped></style>
