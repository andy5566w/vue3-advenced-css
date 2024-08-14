<script setup>
import useShowMessage from './js/packagePopup/showMessage.js'

const { targetComponent, isShow } = useShowMessage()
</script>

<template>
  <router-view />
  {{ isShow + '' }}
  <teleport to="body">
    <component v-if="isShow" :is="targetComponent" />
  </teleport>
</template>

<style scoped lang="scss"></style>
