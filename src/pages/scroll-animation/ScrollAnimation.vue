<template>
  <div class="imgs">
    <img
      src="imgs/img-1.png"
      data-img
      id="img-1"
      class="top-section-img show"
    />
    <img src="imgs/img-2.png" data-img id="img-2" />
    <img src="imgs/img-3.png" data-img id="img-3" />
  </div>
  <section class="top-section full-screen-section">
    <div class="left">
      <h1>Build Better Backends</h1>
      <p>
        The only platform that gives AI the ability to autonomously build web
        services.
      </p>
    </div>
    <div class="right"></div>
  </section>
  <section class="full-screen-section first-main-section">
    <h1>Completely Visual</h1>
    <p>Never touch the command line, from provision to production.</p>
    <div data-img-to-show="#img-1"></div>
  </section>
  <section class="full-screen-section">
    <h1>Full Stack</h1>
    <p>
      Never manage infrastructure again. One click gets you: a database, APIs,
      deployments, hosting, etc.
    </p>
    <div data-img-to-show="#img-2"></div>
  </section>
  <section class="full-screen-section">
    <h1>Launch Faster</h1>
    <p>Logical can get systems to market in minutes instead of weeks.</p>
    <div data-img-to-show="#img-3"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', handleScrollWindow)
})

const handleScrollWindow = (event) => {
  const htmlEle = document.documentElement
  console.log(htmlEle.scrollTop / htmlEle.clientHeight)
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  background-color: #e6e9ea;
  color: #141616;
  font-size: 28px;
}

h1 {
  margin-bottom: 1rem;
  font-size: 110px;
}

.full-screen-section {
  position: relative;
  padding: 1rem;
  height: 100vh;
  text-align: center;
}

.top-section .left,
.top-section .right {
  flex-grow: 1;
  flex-basis: 0;
  padding: 1rem;
  padding-left: 3rem;
}

.top-section {
  display: flex;
  padding: 0;
  text-align: start;
}

.top-section .left {
  background-color: rgb(248, 250, 249, var(--background-opacity));
}

.top-section .right {
  background: linear-gradient(
    210.65deg,
    rgb(152, 157, 157, var(--background-opacity)) 0%,
    rgb(189, 194, 194, var(--background-opacity)) 100%
  );
}

.imgs > .top-section-img {
  /* (oldVal - oldMin) * newRange / oldRange + newMin */
  --value: min(var(--scroll), 30) * 50 / 30;
  transform: translateY(calc(50% - 1% * var(--value)));
  width: calc(50vw + 1vw * var(--value));
}

@media (width <= 1000px) {
  .top-section .right {
    display: none;
  }

  .top-section .left {
    text-align: center;
  }

  body {
    font-size: 24px;
  }

  h1 {
    font-size: 72px;
  }

  .imgs > .top-section-img {
    width: 100vw;
  }
}

:root {
  --scroll: 0;
}
.top-section {
  --background-opacity: calc(100% - 1% * min(var(--scroll), 30) * 100 / 30);
  position: sticky;
  top: 0;
  /* (oldVal - oldMin) * newRange / oldRange + newMin */
  translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / 75);
}

.first-main-section {
  padding-top: 10vh;
}

.imgs > * {
  position: fixed;
  bottom: 0;
  translate: 0 100%;
  z-index: 10;
  transition: translate 250ms ease-in-out;
  width: 100vw;
}

.imgs > .show {
  translate: 0 0;
}

[data-img-to-show] {
  position: absolute;
  top: 20%;
}
</style>
