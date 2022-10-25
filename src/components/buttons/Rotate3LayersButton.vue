<template>
  <a
    href="#"
    class="px-8 py-4 relative transition duration-150 ease-out"
    data-before="button before"
    >Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --rotate: 270deg;
  background-color: #f1c40f;

  &:before,
  &:after {
    content: attr(data-before);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2ce771;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;
    transform-origin: top;
    transform: rotateX(var(--rotate));
  }

  &:after {
    background-color: red;
    transition-delay: 0.3s;
  }

  &:hover {
    &:before,
    &:after {
      --rotate: 0deg;
    }
  }
}
</style>
