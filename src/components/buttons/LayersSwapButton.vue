<template>
  <a
    href="#"
    class="rotate px-8 py-4 border-4 relative transition duration-150 ease-out"
    data-before="Before Element"
    data-after="After Element"
    >Layers Swap Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  color: transparent;
  border-color: #646cff;
  &:before,
  &:after {
    content: attr(data-before);
    position: absolute;
    left: 0;
    top: 0;
    background-color: #363636;
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }

  &:after {
    content: attr(data-after);
    opacity: 0;
    transform: translateX(-100%) rotateY(-360deg) scale(0);
  }

  &:hover {
    &:before {
      transform: translateX(100%) rotateY(360deg) scale(0);
      opacity: 0;
    }
    &:after {
      transform: translateX(0) rotateY(0deg) scale(1);
      opacity: 1;
    }
  }
}
</style>
