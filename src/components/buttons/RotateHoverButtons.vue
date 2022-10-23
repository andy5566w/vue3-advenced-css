<template>
  <div class="flex items-center justify-center">
    <a href="#" class="rotate text-lg px-8 py-4">hover me</a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rotate {
  position: relative;
  overflow: hidden;
  border: 3px solid #ccc;
  &:before {
    content: '';
    width: 100%;
    background-color: red;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 0.5s ease-in;
    border: 1px solid black;
  }

  &:hover:before {
    transform: rotate(0deg);
  }
}
</style>
