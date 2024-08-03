<script setup>
import { ref } from 'vue'
const number = ref(0)
let interval = null
const handleClick = () => {
  if (interval) {
    clearInterval(interval)
  }
  number.value = 0
  interval = setInterval(() => {
    number.value += 1
    if (number.value > 100) {
      clearInterval(interval)
    }
  }, 30)
}
</script>

<template>
  <div
    class="container"
    @click="handleClick"
    :style="{ '--number': number + '%' }"
  >
    <div id="number"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  --number: 0;
  display: flex;
  position: relative;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: conic-gradient(#30f var(--number), #333 0%); // display progress
  width: 200px;
  height: 200px;
  user-select: none;

  &:before {
    position: absolute;
    opacity: 0.9;
    inset: 15px; // set circle gap
    border-radius: 50%;
    background-color: #222;
    content: '';
  }
}
</style>
