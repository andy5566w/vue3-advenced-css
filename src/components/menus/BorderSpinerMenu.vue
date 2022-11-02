<template>
  <ul class="flex gap-4">
    <li>
      <a href="#"> <span></span> <span></span> Home</a>
    </li>
    <li>
      <a href="#"> <span></span> <span></span> About</a>
    </li>
    <li>
      <a href="#"> <span></span> <span></span> Service</a>
    </li>
    <li>
      <a href="#"> <span></span> <span></span> Portfolio</a>
    </li>
    <li>
      <a href="#"> <span></span> <span></span> Contact</a>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
a {
  --sniper-w: 12px;
  position: relative;
  padding: 0.5rem 0.8rem;
  font-size: 22px;
  color: #535bf2;
  background-color: transparent;
  display: inline-block;
  transition: all 0.5s;
  span {
    &:first-child {
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        width: var(--sniper-w);
        height: var(--sniper-w);
        transition: all 0.5s;
        opacity: 0;
      }
      &:before {
        top: 0;
        border-top: 3px solid #535bf2;
        border-left: 3px solid #535bf2;
      }

      &:after {
        bottom: 0;
        border-bottom: 3px solid #535bf2;
        border-left: 3px solid #535bf2;
      }
    }

    &:last-child {
      &:before,
      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: var(--sniper-w);
        height: var(--sniper-w);
        transition: all 0.5s;
        opacity: 0;
      }
      &:before {
        top: 0;
        border-top: 3px solid #535bf2;
        border-right: 3px solid #535bf2;
      }

      &:after {
        bottom: 0;
        border-bottom: 3px solid #535bf2;
        border-right: 3px solid #535bf2;
      }
    }
  }

  &:hover {
    span {
      --moving-dis: -8px;
      &:first-child {
        &:before {
          left: var(--moving-dis);
          top: var(--moving-dis);
          opacity: 1;
        }
        &:after {
          left: var(--moving-dis);
          bottom: var(--moving-dis);
          opacity: 1;
        }
      }

      &:last-child {
        &:before {
          right: var(--moving-dis);
          top: var(--moving-dis);
          opacity: 1;
        }
        &:after {
          right: var(--moving-dis);
          bottom: var(--moving-dis);
          opacity: 1;
        }
      }
    }
  }
}
</style>
