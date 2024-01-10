<script setup>
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import TrelloBoardTask from './TrelloBoardTask.vue'
const columns = ref([
  {
    id: nanoid(),
    title: 'Back log',
    tasks: [
      {
        id: nanoid(),
        title: 'Create marketing landing page',
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
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto">
    <div class="text-left text-black flex gap-4 overflow-x-auto items-start">
      <div
        v-for="column in columns"
        :key="column.id"
        class="column bg-gray-200 p-5 rounded min-w-[250px]"
      >
        <header class="font-bold mb-4">{{ column.title }}</header>
        <trello-board-task
          v-for="task in column.tasks"
          v-bind="task"
          :key="task.id"
        />
        <footer>
          <button class="text-gray-500 bg-inherit focus:outline-0">
            + Add a Card
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
