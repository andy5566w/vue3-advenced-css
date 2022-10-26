<template>
  <a href="#" class="px-8 py-4 relative transition duration-150 ease-out"
    ><span class="overlay"></span>Three Point Button</a
  >
</template>

<script></script>

<style scoped lang="scss">
a {
  --translateX: 0;
  --bgc: #ff0;
  font-size: 22px;
  color: var(--bgc);
  overflow: hidden;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--bgc);
    top: 0;
    left: 0;
    border-radius: 5px;
    z-index: -1;
    transform: scale(0);
    opacity: 0;
    transition: all 0.5s;
  }

  &:before,
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 50%;
    transform: translate(var(--translateX), -50%);
    background-color: var(--bgc);
    position: absolute;
    transition: all 0.5s;
    z-index: -1;
  }
  &:before {
    left: 0;
    --translateX: -100%;
    box-shadow: -200px 0 0 var(--bgc);
  }

  &:after {
    right: 0;
    --translateX: 100%;
    box-shadow: 200px 0 0 var(--bgc);
  }

  &:hover {
    color: #262626;
    .overlay {
      opacity: 1;
      transform: scale(1);
    }
    &:before {
      left: 50%;
      box-shadow: 30px 0 0 var(--bgc);
      --translateX: -50%;
    }

    &:after {
      right: 50%;
      --translateX: 50%;
      box-shadow: -30px 0 0 var(--bgc);
    }
  }
}
</style>
