<template>
  <button
    class="text-lg transition duration-150 ease-out px-8 py-4 relative rounded-none focus:outline-0"
  >
    Border Growing Button
  </button>
</template>

<script></script>

<style scoped lang="scss">
button {
  --main-color: #c47135;
  color: white;
  background-color: var(--main-color);

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    transition: all 0.5s;
  }
  &:before {
    left: -5px;
    top: -5px;
    border-top: 2px solid var(--main-color);
    border-left: 2px solid var(--main-color);
  }
  &:after {
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid var(--main-color);
    border-right: 2px solid var(--main-color);
  }

  &:hover {
    border-color: transparent;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
