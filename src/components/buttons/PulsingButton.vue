<template>
  <a
    href="#"
    class="px-8 py-4 rounded bg-white text-lg font-bold relative transition duration-150 ease-out uppercase"
    >Pulsing Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  color: #777;
  border-radius: 100px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 100px;
    transition: all 0.5s;
    z-index: -1;
  }

  &:hover {
    &:before {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
