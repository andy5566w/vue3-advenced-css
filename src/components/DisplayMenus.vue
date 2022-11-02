<template>
  <div class="flex flex-col items-center gap-8">
    <GrowingBorderMenu />
    <BackgroundAndBorderMenu />
    <SplittedBackgroundMenu />
    <TwoMovingMenu />
    <BlurMenu />
    <TransitionDelayMenu />
  </div>
</template>

<script setup>
import GrowingBorderMenu from './menus/GrowingBorderMenu.vue'
import BackgroundAndBorderMenu from './menus/BackgroundAndBorderMenu.vue'
import SplittedBackgroundMenu from './menus/SplittedBackgroundMenu.vue'
import TwoMovingMenu from './menus/TwoMovingMenu.vue'
import BlurMenu from './menus/BlurMenu.vue'
import TransitionDelayMenu from './menus/TransitionDelayMenu.vue'
</script>

<style scoped></style>
