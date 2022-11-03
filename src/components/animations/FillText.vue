<template>
  <h1 data-text="TEXT">Text</h1>
</template>

<script></script>

<style scoped lang="scss">
h1 {
  font-weight: bold;
  font-size: 5rem;
  text-transform: uppercase;
  position: relative;
  color: #fff;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #535bf2;
    overflow: hidden;
    transition: 0.5s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
}
</style>
