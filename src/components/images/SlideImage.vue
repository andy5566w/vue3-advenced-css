<template>
  <div class="slide-container">
    <img
      class="w-full h-full"
      src="/src/assets/images/market.jpeg"
      alt="market"
    />
    <div class="caption">
      <h2 class="font-bold uppercase">Image Hover</h2>
      <p>
        consectetur adipisicing elit. Alias, amet doloremque explicabo facilis
        nemo nisi placeat quae ratione reiciendis totam!
      </p>
      <a href="#">Read More...</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.slide-container {
  width: 450px;
  height: 300px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#2d3436, 0.8);
    transition: all 0.3s;
    transition-delay: 0.7s;
    transform: translate(100%, 100%) rotate(0deg);
  }

  .caption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      transition: all 0.3s;
      transform: translate(120%, -150%);
      background-color: rgba(0, 0, 0, 0.8);
      padding: 0.5rem 0;
      transition-delay: 0.5s;
    }

    p {
      width: 80%;
      margin: 0 auto;
      font-size: 1.3rem;
      font-weight: 700;
      transition: all 0.3s;
      transform: translate(-120%, 150%);
      transition-delay: 0.3s;
    }

    a {
      background-color: #000;
      color: #fff;
      padding: 0.5rem 1rem;
      width: 150px;
      border-radius: 5px;
      align-self: center;
      transition: all 0.3s;
      transition-delay: 0s;
      transform: translateY(100px);
    }
  }

  &:hover {
    &:before {
      width: 140%;
      height: 200%;
      transform: rotate(45deg) translate(-30%, -10%);
      transition-delay: 0s;
    }

    .caption {
      h2,
      p,
      a {
        transform: translate(0, 0);
      }
      h2 {
        transition-delay: 0.2s;
      }
      a {
        transition-delay: 0.5s;
      }
    }
  }
}
</style>
