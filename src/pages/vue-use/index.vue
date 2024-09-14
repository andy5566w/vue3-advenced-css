<script setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const input = ref('')
// copy -> This is function and must assign with parenthesis.
const { copy, copied } = useClipboard({ source: input, copiedDuring: 3000 })
</script>

<template>
  <input type="text" v-model="input" placeholder="" />
  <br />
  <button @click="copy()">{{ copied ? 'copied' : 'copy' }}</button>
</template>

<style scoped lang="scss"></style>
