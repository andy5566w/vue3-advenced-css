<template>
  <div class="imageContainer">
    <img src="/src/assets/images/bali.jpeg" alt="tower" />
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    transform: translateY(100%);
  }

  &:hover {
    .caption {
      opacity: 1;
      transform: translateY(0);
    }

    img {
      transform: translateY(-30%);
    }
  }
}
</style>
