<template>
  <div>
    <button @click="increase">increase</button>
    {{ count }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function increase() {
  count.value++
}

defineExpose({
  count,
})
</script>

<style></style>
