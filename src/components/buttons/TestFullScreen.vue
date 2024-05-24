<template>
  <base-button @click="toggleFullScreen">test full screen </base-button>
</template>
<script setup>
import BaseButton from './BaseButton.vue'
import { toggleFullScreen } from '@/js/fullscreen.js'
</script>

<style scoped lang="scss"></style>
