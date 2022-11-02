<template>
  <div class="borderAndBackground">
    <BaseMenu />
  </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue'
</script>

<style lang="scss">
.borderAndBackground {
  a {
    padding: 1rem 0.8rem;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: scaleY(1.5);
      border-top: 3px solid #535bf2;
      border-bottom: 3px solid #535bf2;
      transition: all 0.3s;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #535bf2;
      transition: all 0.3s;
      transform: scaleY(0);
      z-index: -1;
    }

    &:hover {
      color: #fff;
      &:before {
        transform: scaleY(0.7);
      }

      &:after {
        transform: scaleY(0.5);
      }
    }
  }
}
</style>
