<template>
  <ul>
    <li>S</li>
    <li>M</li>
    <li>O</li>
    <li>K</li>
    <li>Y</li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
ul {
  --delay: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  li {
    transition: 0.5s;
    font-weight: bold;
    font-size: 100px;
    letter-spacing: 10px;
  }

  //li:nth-child(1) {
  //  transition-delay: calc(var(--delay) * 5);
  //}
  //li:nth-child(2) {
  //  transition-delay: calc(var(--delay) * 4);
  //}
  //li:nth-child(3) {
  //  transition-delay: calc(var(--delay) * 3);
  //}
  //li:nth-child(4) {
  //  transition-delay: calc(var(--delay) * 2);
  //}
  //li:nth-child(5) {
  //  transition-delay: calc(var(--delay) * 1);
  //}

  li:nth-child(1) {
    transition-delay: calc(var(--delay) * 1);
  }
  li:nth-child(2) {
    transition-delay: calc(var(--delay) * 2);
  }
  li:nth-child(3) {
    transition-delay: calc(var(--delay) * 3);
  }
  li:nth-child(4) {
    transition-delay: calc(var(--delay) * 4);
  }
  li:nth-child(5) {
    transition-delay: calc(var(--delay) * 5);
  }
  &:hover {
    li {
      transform: rotate(45deg) translateY(-100px);
      opacity: 0;
      filter: blur(20px);
    }
  }
}
</style>
