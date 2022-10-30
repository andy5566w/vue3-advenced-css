<template>
  <ul class="flex gap-4">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Service</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</template>

<script></script>

<style lang="scss" scoped>
a {
  padding: 0.5rem 0.8rem;
  font-size: 22px;
  color: #535bf2;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #535bf2;
    transition: all 0.3s;
    transform: scaleX(0);
  }

  &:before {
    top: 0;
    transform-origin: left top;
  }

  &:after {
    left: 0;
    bottom: 0;
    transform-origin: right bottom;
  }

  &:hover {
    &:before,
    &:after {
      transform: scaleX(1);
    }
  }
}
</style>
