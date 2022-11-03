<template>
  <h1 data-text="TEXT">Text</h1>
</template>

<script></script>

<style scoped lang="scss">
h1 {
  position: relative;
  color: #fff;
  font-weight: bold;
  font-size: 5rem;
  text-transform: uppercase;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    width: 0;
    height: 100%;
    overflow: hidden;
    content: attr(data-text);
    color: #535bf2;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
}
</style>
