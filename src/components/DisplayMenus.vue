<template>
  <div class="flex flex-col items-center gap-8">
    <GrowingBorderMenu />
    <BackgroundAndBorderMenu />
    <SplittedBackgroundMenu />
  </div>
</template>

<script setup>
import GrowingBorderMenu from './menus/GrowingBorderMenu.vue'
import BackgroundAndBorderMenu from './menus/BackgroundAndBorderMenu.vue'
import SplittedBackgroundMenu from './menus/SplittedBackgroundMenu.vue'
</script>

<style scoped></style>
