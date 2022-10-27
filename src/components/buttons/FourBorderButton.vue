<template>
  <a href="#" class="px-8 py-4 relative transition duration-150 ease-out">
    <span>Four Border Button</span>
  </a>
</template>

<script></script>

<style lang="scss" scoped>
a {
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    transition: all 0.5s;
    background-color: #fff;
    z-index: -1;
  }
  &:before {
    top: 0;
    left: -100%;
  }

  &:after {
    bottom: 0;
    left: 100%;
  }

  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    transition: all 0.5s;
    background-color: #fff;
    z-index: -1;
  }

  span:before {
    left: 0;
    top: 100%;
  }
  span:after {
    right: 0;
    top: -100%;
  }

  &:hover {
    &:before,
    &:after {
      left: 0;
    }

    span:before,
    span:after {
      top: 0;
    }
  }
}
</style>
