<template>
  <div class="flex flex-col items-center gap-8">
    <GrowingBorderMenu />
    <BackgroundAndBorderMenu />
    <SplittedBackgroundMenu />
    <TwoMovingMenu />
    <BlurMenu />
    <TransitionDelayMenu />
    <BorderAndBackground />
    <BorderSniper />
  </div>
</template>

<script setup>
import GrowingBorderMenu from './menus/GrowingBorderMenu.vue'
import BackgroundAndBorderMenu from './menus/BackgroundAndBorderMenu.vue'
import SplittedBackgroundMenu from './menus/SplittedBackgroundMenu.vue'
import TwoMovingMenu from './menus/TwoMovingMenu.vue'
import BlurMenu from './menus/BlurMenu.vue'
import TransitionDelayMenu from './menus/TransitionDelayMenu.vue'
import BorderAndBackground from './menus/BorderAndBaclgroundMenu.vue'
import BorderSniper from './menus/BorderSpinerMenu.vue'
</script>

<style scoped></style>
