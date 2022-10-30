<template>
  <div class="flex flex-col gap-8 items-center">
    <FadingImage />
    <MovingImage />
    <DelayImage />
    <SlideImage />
  </div>
</template>

<script setup>
import FadingImage from '../components/images/FadingImage.vue'
import MovingImage from '../components/images/MovingImage.vue'
import DelayImage from './images/DelayImage.vue'
import SlideImage from './images/SlideImage.vue'
</script>

<style scoped></style>
