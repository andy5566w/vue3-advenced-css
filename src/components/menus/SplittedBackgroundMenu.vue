<template>
  <ul class="flex gap-4">
    <li>
      <a href="#">Home <span></span></a>
    </li>
    <li>
      <a href="#">About <span></span></a>
    </li>
    <li>
      <a href="#">Service <span></span></a>
    </li>
    <li>
      <a href="#">Portfolio <span></span></a>
    </li>
    <li>
      <a href="#">Contact <span></span></a>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
ul {
  gap: 0;
}
a {
  --split-color: #e91e63;
  padding: 0.5rem 1.3rem;
  font-size: 22px;
  color: #535bf2;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: inline-block;
  transition: all 0.5s;

  &:before,
  &:after,
  span:before,
  span:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 25%;
    background-color: var(--split-color);
    top: 0;
    transition: all 0.3s;
    transform: translateY(-100%);
    z-index: -1;
  }

  &:before {
    left: 0;
  }

  &:after {
    left: 25%;
    transition-delay: 0.1s;
  }

  span:before {
    left: 50%;
    transition-delay: 0.3s;
  }

  span:after {
    left: 75%;
    transition-delay: 0.3s;
  }

  &:hover {
    color: #fff;

    &:before,
    &:after,
    span:before,
    span:after {
      transform: translateY(0);
    }

    &:before {
      left: 0;
    }

    &:after {
      left: 25%;
      transition-delay: 0.1s;
    }

    span:before {
      left: 50%;
      transition-delay: 0.2s;
    }

    span:after {
      left: 75%;
      transition-delay: 0.3s;
    }
  }
}
</style>
