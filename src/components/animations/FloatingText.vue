<template>
  <section>
    <h1>
      Coming <br />
      Soon~~~
    </h1>
  </section>
</template>

<script>
export default {
  name: 'FloatingText',
}
</script>

<style scoped lang="scss">
section {
  background-color: #26de81;
  width: 100%;
}
h1 {
  animation: floats 2s linear infinite alternate;
  color: white;
  font-size: 90px;
  font-family: Arial, serif;
  letter-spacing: 15px;
  text-align: center;
  text-shadow: 0 1px 0 #efefef, 0 2px 0 #efefef, 0 3px 0 #efefef,
    0 4px 0 #efefef, 0 30px 5px rgba(0, 0, 0, 0.1);
}

@keyframes floats {
  from {
    transform: rotate(5deg);
  }

  to {
    transform: rotate(-5deg);
  }
}
</style>
