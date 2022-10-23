<template>
  <a class="swipe-button px-8 py-4 border-4 border-current relative" href="#"
    >Swipe button</a
  >
</template>

<script setup></script>

<style lang="scss" scoped>
.swipe-button {
  overflow: hidden;
  &:before {
    transition: all 0.5s ease-in;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    transform: translateX(-100%);
    z-index: -1;
  }
  &:hover:before {
    transform: translateX(0);
    color: white;
  }
}
</style>
