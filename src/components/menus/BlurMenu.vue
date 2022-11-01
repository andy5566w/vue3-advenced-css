<template>
  <div class="BlurMenu">
    <BaseMenu />
  </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue'
</script>

<style lang="scss">
.BlurMenu {
  &:hover {
    a {
      filter: blur(5px);
    }
  }

  a {
    border-radius: 5px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ee5a24;
      transition: all 0.3s;
      z-index: -1;
      transform: scale(0);
    }

    &:hover {
      color: #fff;
      transform: scale(1.5);
      filter: blur(0);

      &:before {
        transform: scale(1.5);
      }
    }
  }
}
</style>
