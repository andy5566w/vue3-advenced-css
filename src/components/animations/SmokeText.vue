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
  align-items: center;
  justify-content: center;
  height: 200px;

  li {
    font-size: 100px;
    font-weight: bold;
    letter-spacing: 10px;
    transition: 0.5s;
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
      filter: blur(20px);
      opacity: 0;
    }
  }
}
</style>
