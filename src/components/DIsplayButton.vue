<template>
  <div class="flex items-center justift-center gap-1">
    <RotateHoverButton />
    <SwipeButton />
    <SpreadHoverButton />
  </div>
</template>

<script setup>
import RotateHoverButton from './buttons/RotateHoverButtons.vue'
import SwipeButton from './buttons/SwipeButton.vue'
import SpreadHoverButton from './buttons/SpreadHoverButton.vue'
</script>

<style lang="scss" scoped></style>
