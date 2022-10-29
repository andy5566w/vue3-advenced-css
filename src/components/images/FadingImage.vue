<template>
  <div class="imageContainer">
    <img src="/src/assets/images/paris.jpeg" alt="tower" />
    <div class="caption">
      <h2 class="uppercase font-bold text-3xl">caption!</h2>
      <p class="text-xl">You can write some review here</p>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.imageContainer {
  position: relative;
  height: 500px;
  overflow: hidden;
  img {
    height: 100%;
    transition: all 0.5s;
  }

  .caption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.5s;
  }

  &:hover {
    .caption {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.5);
    }

    img {
      transform: rotate(15deg) scale(1.3);
    }
  }
}
</style>
