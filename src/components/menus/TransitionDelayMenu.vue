<template>
  <div class="TransitionDelayMenu">
    <ul class="flex gap-4">
      <li>
        <span>Home</span>
        <a href="#">Home</a>
      </li>
      <li>
        <span>About</span>
        <a href="#">About</a>
      </li>
      <li>
        <span>Service</span>
        <a href="#">Service</a>
      </li>
      <li>
        <span>Portfolio</span>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <span>Contact</span>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss">
.TransitionDelayMenu {
  li {
    overflow: hidden;
    position: relative;
    &:hover {
      a {
        transform: translateY(0);
        &:before {
          transform: scaleX(1);
          transition-delay: 0.3s;
        }
      }

      span {
        transform: translateY(100%);
      }
    }
  }
  span {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.8rem;
    font-size: 22px;
    color: #535bf2;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
    cursor: pointer;
  }

  a {
    padding: 0.5rem 0.8rem;
    font-size: 22px;
    color: #535bf2;
    position: relative;
    background-color: transparent;
    display: inline-block;
    transition: all 0.5s;
    transform: translateY(-100%);
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f0f;
      transition: all 0.3s;
      transform-origin: left;
      transform: scaleX(0);
      z-index: -1;
    }
  }
}
</style>
