<template>
  <a
    href="#"
    class="rotate px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    data-before="before element"
    data-after="after element"
    >Two Layers Swap Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  overflow: hidden;
  color: #242424;
  &:hover {
    &:before {
      transform: translate(100%, -100%);
    }

    &:after {
      transform: translate(0%, 0%);
    }
  }

  &:before,
  &:after {
    content: attr(data-before);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fffa65;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
  }

  &:after {
    transform: translate(-100%, 100%);
    content: attr(data-after);
  }
}
</style>
