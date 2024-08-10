<template>
  <div class="wrap">
    <h1>setInterval</h1>
    <div class="ball" :style="{ translate: `${distance}px 0` }"></div>

    <h1>requestAnimationFrame</h1>
    <div
      class="ball"
      :style="{ translate: `${distanceForAnimation}px 0` }"
    ></div>

    <h1>keyframes</h1>
    <div class="ball" :class="{ run: isRun }"></div>
  </div>
  <button @click="run">run</button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const distance = ref(0)
const distanceForAnimation = ref(0)
const destination = 1000
const isRun = ref(false)
const accelerator = 5

const moveByInterval = () => {
  let timer
  timer = setInterval(() => {
    if (distance.value >= destination) {
      clearInterval(timer)
    }
    distance.value += accelerator
  })
}

const moveByAnimation = () => {
  if (distanceForAnimation.value >= destination) {
    return
  }
  distanceForAnimation.value += accelerator
  requestAnimationFrame(moveByAnimation)
}

const moveByKeyframes = () => {
  isRun.value = true
}

const reset = () => {
  distanceForAnimation.value = 0
  distance.value = 0
  isRun.value = false
}
const run = () => {
  reset()
  moveByInterval()
  moveByAnimation()
  // moveByKeyframes()
}

onMounted(() => {})
</script>

<style scoped lang="scss">
.wrap {
  width: 100vw;
  text-align: left;
}
.ball {
  transition: al 0.2s;
  margin: 1rem;
  border-radius: 50%;
  background-color: lightblue;
  width: 200px;
  height: 200px;

  &.run {
    animation: move 0.2s forwards;
  }
}

@keyframes move {
  from {
    translate: 0 0;
  }

  to {
    translate: 500px 0;
  }
}
</style>
