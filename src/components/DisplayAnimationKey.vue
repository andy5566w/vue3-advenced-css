<template>
  <div class="flex flex-col gap-8 items-center">
    <FloatingText />
    <RotateLoadingRect />
  </div>
</template>

<script setup>
import FloatingText from './animations/FloatingText.vue'
import RotateLoadingRect from './animations/rotateLoadingRect.vue'
</script>

<style scoped></style>
