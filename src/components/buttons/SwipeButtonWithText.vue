<template>
  <a
    class="swipe-button px-8 py-4 border-4 border-current relative"
    href="#"
    data-text="Yep!"
    >Swipe Button With Text</a
  >
</template>

<script setup></script>

<style lang="scss" scoped>
.swipe-button {
  overflow: hidden;
  &:before {
    display: block;
    transition: all 0.5s ease-in;
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    transform: translateX(-100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover:before {
    transform: translateX(0);
    background: #fff;
  }
}
</style>
