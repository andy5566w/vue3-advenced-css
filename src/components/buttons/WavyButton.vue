<template>
  <a
    href="#"
    class="px-8 py-4 border-4 border-current relative transition duration-150 ease-out"
    >Wavy Button
    <div class="wave"></div
  ></a>
</template>

<script></script>

<style scoped lang="scss">
a {
  color: #00aeff;
  overflow: hidden;

  &:hover {
    color: #fff;
    border-color: #00aeff;
    .wave {
      top: 0;
    }
  }
}
.wave {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(100% + 22px + 4px);
  background-color: #00aeff;
  transition: all 0.5s;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    top: -22px;
    height: 22px;
    background-image: url(/src/assets/wave.png);
    animation: wavy 0.8s linear infinite;
  }
}

@keyframes wavy {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 118px;
  }
}
</style>
