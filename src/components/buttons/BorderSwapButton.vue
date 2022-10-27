<template>
  <a href="#" class="px-8 py-4 relative transition duration-150 ease-out"
    >Border Swap Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --top: -10%;
  --left: 0;
  --w: 100%;
  --h: 120%;
  color: #fdc518;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.5s;
    left: var(--left);
    top: var(--top);
    height: var(--h);
    width: var(--w);
  }

  &:before {
    border-right: 2px solid red;
    border-left: 2px solid #fdc518;
  }

  &:after {
    --w: 120%;
    --h: 100%;
    --top: 0;
    --left: -10%;
    border-top: 2px solid red;
    border-bottom: 2px solid #fdc518;
  }

  &:hover {
    &:before {
      transform: rotateY(180deg);
    }

    &:after {
      transform: rotateX(180deg);
    }
  }
}
</style>
