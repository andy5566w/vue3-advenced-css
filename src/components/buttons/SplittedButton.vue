<template>
  <a
    href="#"
    class="px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    ><span class="block">Spitted Button</span></a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --top: 0;
  --left: -25%;
  --animation-time: 0.4s;
  --delay-time: 0.1s;
  overflow: hidden;

  span:before,
  span:after,
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 25%;
    background-color: #646cff;
    height: 100%;
    transition: all var(--animation-time);
    top: var(--top);
    left: var(--left);
    z-index: -1;
    transition-delay: calc(var(--delay-time));
  }

  &:after {
    --left: 25%;
    --top: -100%;
    transition-delay: calc(var(--delay-time) * 2);
  }

  span:before {
    --left: 50%;
    --top: 100%;
    transition-delay: calc(var(--delay-time) * 3);
  }
  span:after {
    --left: 100%;
    --top: 0%;
    transition-delay: calc(var(--delay-time) * 4);
  }

  &:hover {
    color: #262626;
    border-color: #646cff;
    span:before {
      --top: 0;
    }

    span:after {
      --left: 75%;
    }

    &:before {
      --top: 0;
      --left: 0;
    }

    &:after {
      --top: 0;
    }
  }
}
</style>
