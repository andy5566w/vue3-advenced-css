<template>
  <a href="#" class="px-8 py-4 border-4 border-current relative"
    >Spread Hover Button</a
  >
</template>

<script setup></script>

<style lang="scss" scoped>
a {
  &:before,
  &:after {
    transition: all 0.5s ease-in;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #ccc;
    transform: rotateX(90deg);
    z-index: -1;
  }

  &:after {
    transform: rotateY(90deg);
  }

  &:hover:before {
    transform: rotateX(0deg);
  }

  &:hover:after {
    transform: rotateY(0deg);
  }
}
</style>
