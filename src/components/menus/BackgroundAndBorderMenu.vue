<template>
  <div class="BackgroundAndBorderMenu">
    <BaseMenu />
  </div>
</template>

<script setup>
import BaseMenu from './BaseMenu.vue'
</script>

<style lang="scss">
.BackgroundAndBorderMenu {
  a {
    --move-distance: 8px;
    --color: #e91e63;
    overflow: visible;

    &:before,
    &:after {
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
      border: solid var(--color);
      width: 12px;
      height: 12px;
      content: '';
    }

    &:before {
      bottom: calc(var(--move-distance) * -2);
      left: calc(var(--move-distance) * -2);
      border-width: 0 0 3px 3px;
    }
    &:after {
      top: calc(var(--move-distance) * -2);
      right: calc(var(--move-distance) * -2);
      border-width: 3px 3px 0 0;
    }

    &:hover {
      background-color: var(--color);
      color: white;
      &:before {
        bottom: calc(var(--move-distance) * -1);
        left: calc(var(--move-distance) * -1);
        opacity: 1;
      }

      &:after {
        top: calc(var(--move-distance) * -1);
        right: calc(var(--move-distance) * -1);
        opacity: 1;
      }
    }
  }
}
</style>
