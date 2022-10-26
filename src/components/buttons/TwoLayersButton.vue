<template>
  <a href="#" class="px-8 py-4 relative transition duration-150 ease-out"
    >Two Layer Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --left: -3px;
  --top: -3px;
  --bgc: #20caff;
  letter-spacing: 2px;
  font-weight: bold;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: var(--left);
    top: var(--top);
    width: 100%;
    height: 100%;
    background-color: var(--bgc);
    z-index: -1;
    mix-blend-mode: multiply;
    transition: all 0.5s;
    transform-origin: top;
  }

  &:after {
    --left: 3px;
    --top: 3px;
    --bgc: red;
    transform-origin: bottom;
  }

  &:hover {
    &:before {
      --top: -6px;
      --left: 0;
      transform: perspective(1000px) rotateX(75deg);
    }
    &:after {
      --left: 3px;
      --top: 6px;
      transform: perspective(1000px) rotateX(-75deg);
    }
  }
}
</style>
