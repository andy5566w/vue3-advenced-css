<script setup>
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue'

const input = ref('')
// copy -> This is function and must assign with parenthesis.
const { copy, copied, text, isSupported } = useClipboard({
  source: input,
  copiedDuring: 3000,
})
</script>

<template>
  <input type="text" v-model="input" placeholder="" />
  <br />
  <button @click="copy(input)">{{ copied ? 'copied' : 'copy' }}</button>
  <p>copy value: {{ text }}, isSupported: {{ isSupported }}</p>
</template>

<style scoped lang="scss"></style>
