<script setup>
import { initializeTeleport } from './js/packagePopup/showMessage.js'
const { targetComponent, isShowTeleport, vBind, vOn } = initializeTeleport()
</script>

<template>
  <router-view />
  <teleport to="body">
    <component
      v-if="isShowTeleport"
      :is="targetComponent"
      v-bind="vBind"
      v-on="vOn"
    />
  </teleport>
</template>

<style scoped lang="scss"></style>
