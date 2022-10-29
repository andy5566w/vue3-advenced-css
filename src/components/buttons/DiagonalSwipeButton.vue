<template>
  <a href="#" class="border-current relative transition duration-150 ease-out"
    >Diagonal Swipe Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --w: 200px;
  --h: 50px;
  line-height: var(--h);
  width: var(--w);
  height: var(--h);
  border-width: 4px;
  border-color: #646cff;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%) translateY(-4px);
    transition: all 0.5s;
    z-index: -1;
  }

  &:before {
    border-top: calc(var(--h) / 2) solid #646cff;
    border-bottom: calc(var(--h) / 2) solid #646cff;
    border-right: calc(var(--h) / 2) solid transparent;
  }

  &:after {
    border-top: calc(var(--h) / 2) solid #646cff;
    border-bottom: calc(var(--h) / 2) solid #646cff;
    border-left: calc(var(--h) / 2) solid transparent;
    transform: translateX(100%) translateY(-4px);
  }

  &:hover {
    color: #fff;
    &:before,
    &:after {
      transform: translateX(0) translateY(-4px);
    }
  }
}
</style>
