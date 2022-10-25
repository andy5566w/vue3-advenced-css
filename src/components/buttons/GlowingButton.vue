<template>
  <a
    href="#"
    class="rotate px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    >Glowing Button</a
  >
</template>

<script setup></script>

<style lang="scss" scoped>
a {
  --translateX: -100%;
  --rotate: 60deg;
  overflow: hidden;
  &:hover {
    background-color: #f44336;
    color: #fff;
    border-color: #646cff;

    &:before {
      --translateX: 100%;
      //--rotate: 0;
    }
  }

  &:before {
    content: '';
    position: absolute;
    transition: all 0.5s ease-in;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: #fff;
    transform: translateX(var(--translateX)) rotate(var(--rotate));
  }
}
</style>
