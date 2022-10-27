<template>
  <a
    href="#"
    class="px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    ><span>F</span>irst Letter Rotate Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    z-index: -1;
    transition: all 0.5s;
    opacity: 0;
  }

  span {
    color: transparent;
    position: relative;

    &:before {
      transition: all 0.5s;
      content: 'F';
      color: #646cff;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &:hover {
    color: #262626;
    border-color: #535bf2;
    &:before {
      opacity: 1;
      background-color: #535bf2;
      transform: rotate(15deg);
    }

    span {
      &:before {
        color: #262626;
        font-size: 60px;
        transform: translate(-55%, -70%) rotate(360deg);
      }
    }
  }
}
</style>
