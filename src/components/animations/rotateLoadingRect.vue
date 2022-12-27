<template>
  <section>
    <div class="loading"></div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 200px;
  background-color: #26de81;
  width: 100%;
  height: 150px;
  .loading {
    animation: loading 2s linear alternate infinite;
    border-radius: 12px;
    background-color: #fff;
    width: 100px;
    height: 100px;
  }
}

@keyframes loading {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  50% {
    transform: rotateX(0deg) rotateY(180deg);
  }

  100% {
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
