<template>
  <div class="flex items-center justift-center gap-4">
    <RotateHoverButton />
    <SwipeButton />
    <SwipeButtonWithText />
    <SpreadHoverButton />
    <StrengthButton />
    <GlowingButton />
    <TwoLayersSwapButton />
  </div>
</template>

<script setup>
import RotateHoverButton from './buttons/RotateHoverButtons.vue'
import SwipeButton from './buttons/SwipeButton.vue'
import SpreadHoverButton from './buttons/SpreadHoverButton.vue'
import StrengthButton from './buttons/StrengthButton.vue'
import SwipeButtonWithText from './buttons/SwipeButtonWithText.vue'
import GlowingButton from './buttons/GlowingButton.vue'
import TwoLayersSwapButton from './buttons/TwoLayersSwapButton.vue'
</script>

<style lang="scss" scoped></style>
