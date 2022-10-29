<template>
  <a
    href="#"
    class="px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    >Two Cuts Button <span></span
  ></a>
</template>

<script></script>

<style scoped lang="scss">
a {
  overflow: hidden;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: -1;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-60deg);
      width: 8%;
      height: 500%;
      background-color: #fff;
      transition: all 0.5s;
    }
  }

  &:hover {
    color: #fff;
    border-color: #535bf2;
    span:before {
      transform: translate(-50%, -50%) rotate(60deg);
      background-color: #262626;
      width: 100%;
    }
  }
}
</style>
