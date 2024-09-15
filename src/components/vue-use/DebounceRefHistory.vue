<script setup>
import { ref } from 'vue'
import { useDebouncedRefHistory, useRefHistory } from '@vueuse/core'
const input = ref('')
const { history, undo, redo } = useDebouncedRefHistory(input, {
  debounce: 1000,
})

const arr = ref([])
const input2 = ref('')
const {
  history: noDebounceHistory,
  redo: noDebounceRedo,
  undo: noDebounceUndo,
} = useRefHistory(arr, {
  deep: true,
})

const handleAddTodo = () => {
  const valueTodo = input2.value
  arr.value.unshift(valueTodo)
}
</script>

<template>
  <input type="text" v-model="input" />
  <button @click="undo">undo</button>
  <button @click="redo">redo</button>
  <br />
  <pre>{{ history }}</pre>

  <h3>Use case</h3>

  <input type="text" v-model="input2" placeholder="add new todo" />
  <button @click="handleAddTodo">add to do</button>
  <button @click="noDebounceUndo">undo</button>
  <button @click="noDebounceRedo">redo</button>
  <ul>
    <li v-for="history in arr">{{ history }}</li>
  </ul>

  <pre>{{ noDebounceHistory }}</pre>
</template>

<style scoped lang="scss"></style>
