<template>
  <a
    href="#"
    class="px-8 py-4 text-white font-bold relative transition duration-150 ease-out"
    >Two Skew Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    top: -5px;
    left: 0;
    transform: skewX(30deg);
    background-color: #ee5253;
    z-index: -1;
    transition: all 0.2s;
  }

  &:after {
    left: calc(50% + 5px);
    top: 5px;
    background-color: #0a3d62;
  }

  &:hover {
    color: #fff;
    &:before {
      transform: skewX(0);
      left: 50%;
      top: 0;
    }

    &:after {
      left: 0;
      top: 0;
      transform: skewX(0);
    }
  }
}
</style>
