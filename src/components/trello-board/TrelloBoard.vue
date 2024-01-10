<script setup>
import { ref } from 'vue'
import { nanoid } from 'nanoid'
const columns = ref([
  {
    id: nanoid(),
    title: 'Create marketing landing page',
    tasks: [
      {
        id: nanoid(),
        title: 'create marketing landing page',
        createAt: new Date(),
      },
      {
        id: nanoid(),
        title: 'Develop cool new feature',
        createAt: new Date(),
      },
      {
        id: nanoid(),
        title: 'Fix page nav bug',
        createAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Selected for Dev',
    tasks: [],
  },
  {
    id: nanoid(),
    title: 'In Progress',
    tasks: [],
  },
  {
    id: nanoid(),
    title: 'QA',
    tasks: [],
  },
  {
    id: nanoid(),
    title: 'Completed',
    tasks: [],
  },
])
console.log(columns.value)
</script>
<template>
  <div>
    <div v-for="column in columns" :key="column.id">
      <header>{{ column.title }}</header>
      <p v-for="task in column.tasks" :key="task.id">
        {{ task.title }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
