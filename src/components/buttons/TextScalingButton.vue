<template>
  <a
    href="#"
    class="rotate px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    data-before="Hover me"
    >Text Scaling Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --scale: 5;
  --opacity: 0;

  overflow: hidden;
  &:before {
    content: attr(data-before);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in;
    transform: scale(var(--scale));
    opacity: var(--opacity);
  }

  &:hover {
    --scale: 1;
    --opacity: 1;
  }
}
</style>
