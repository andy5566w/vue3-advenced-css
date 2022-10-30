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
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border: solid var(--color);
      transition: all 0.3s;
      opacity: 0;
    }

    &:before {
      left: calc(var(--move-distance) * -2);
      bottom: calc(var(--move-distance) * -2);
      border-width: 0 0 3px 3px;
    }
    &:after {
      top: calc(var(--move-distance) * -2);
      right: calc(var(--move-distance) * -2);
      border-width: 3px 3px 0 0;
    }

    &:hover {
      color: white;
      background-color: var(--color);
      &:before {
        opacity: 1;
        left: calc(var(--move-distance) * -1);
        bottom: calc(var(--move-distance) * -1);
      }

      &:after {
        opacity: 1;
        top: calc(var(--move-distance) * -1);
        right: calc(var(--move-distance) * -1);
      }
    }
  }
}
</style>
