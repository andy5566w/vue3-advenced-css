<template>
  <div class="TwoMovingMenu">
    <BaseMenu />
  </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue'
</script>

<style lang="scss">
.TwoMovingMenu {
  a {
    overflow: visible;
    &:before,
    &:after {
      content: '';
      transition: all 0.3s;
      position: absolute;
      width: 0;
      height: 5px;
      background-color: #00bcd4;
      left: 0;
      top: 100%;
    }

    &:after {
      left: initial;
      right: 0;
      background-color: #f0f;
    }

    &:hover {
      &:before {
        width: 50%;
        transform: translateX(100%);
      }
      &:after {
        width: 50%;
        transform: translateX(-100%);
      }
    }
  }
}
</style>
