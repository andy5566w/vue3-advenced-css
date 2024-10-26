<template>
  <button @click="handlePrevious">pre</button>
  <div class="slide">
    <img
      v-for="(img, index) in imgs"
      :src="img"
      :alt="img"
      ref="imgsRef"
      :data-index="index"
    />
  </div>
  <button @click="handleNext">next</button>
</template>

<script setup>
import { onMounted } from 'vue'
import beach from '@/assets/images/beach.jpeg'
import paris from '@/assets/images/paris.jpeg'
import bali from '@/assets/images/bali.jpeg'

const imgs = [beach, paris, bali]

let slideElement = ''

const handleNext = () => {
  document
    .querySelector('.slide')
    .append(slideElement.querySelector('img:first-child'))
}

const handlePrevious = () => {
  document
    .querySelector('.slide')
    .prepend(slideElement.querySelector('img:last-child'))
}

onMounted(() => {
  slideElement = document.querySelector('.slide')
})
</script>

<style scoped lang="scss">
.slide {
  --width: 300px;
  display: flex;
  width: var(--width);
  overflow: hidden;

  img {
    aspect-ratio: 16 / 9;
    width: var(--width);
  }
}
</style>
