<template>
  <div class="growing-menu">
    <BaseMenu />
  </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue'
</script>

<style lang="scss">
.growing-menu {
  a {
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #535bf2;
      transition: all 0.3s;
      transform: scaleX(0);
    }

    &:before {
      top: 0;
      transform-origin: left top;
    }

    &:after {
      left: 0;
      bottom: 0;
      transform-origin: right bottom;
    }

    &:hover {
      &:before,
      &:after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
