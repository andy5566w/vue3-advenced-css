<template>
  <a
    href="#"
    class="rotate px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    >Circular Swap Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  overflow: hidden;
  &:before {
    content: '';
    transition: all 0.3s ease-in;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-radius: 0 0 50% 50%;
    background-color: tomato;
    z-index: -1;
  }

  &:hover {
    &:before {
      height: 190%;
    }
  }
}
</style>
