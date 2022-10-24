<template>
  <div class="flex items-center justift-center gap-4">
    <RotateHoverButton />
    <SwipeButton />
    <SwipeButtonWithText />
    <SpreadHoverButton />
    <StrenthButton />
  </div>
</template>

<script setup>
import RotateHoverButton from './buttons/RotateHoverButtons.vue'
import SwipeButton from './buttons/SwipeButton.vue'
import SpreadHoverButton from './buttons/SpreadHoverButton.vue'
import StrenthButton from './buttons/StrengthButton.vue'
import SwipeButtonWithText from './buttons/SwipeButtonWithText.vue'
</script>

<style lang="scss" scoped></style>
