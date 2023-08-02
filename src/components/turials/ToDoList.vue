<template>
  <div class="container">
    <div class="box">
      <h2>To Do List</h2>
      <input
        type="text"
        placeholder="Write something.."
        class="inputBox"
        @keyup="handleKeyUp"
      />
      <ul class="list">
        <li @click="handleLiClick" v-for="li in listEle" :key="li.id">
          {{ li.input }} <i @click="handleRemoveLi(li.id)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const listEle = ref([])
const handleKeyUp = (event) => {
  if (event.key === 'Enter') {
    const input = event.target.value
    addItem(input)
    event.target.value = ''
  }
}

const handleLiClick = (event) => {
  event.target.classList.toggle('done')
}

const handleRemoveLi = (targetId) => {
  listEle.value = listEle.value.filter(({ id }) => id !== targetId)
}

const addItem = (input) => {
  listEle.value.unshift({
    input,
    id: Math.random().toString(16).slice(2),
  })
}
</script>

<style scoped lang="scss">
.container {
}
.box {
  position: relative;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(225, 225, 225, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  background: inherit;
  padding: 30px 50px;
  width: 450px;
  height: 550px;

  h2 {
    width: 100%;
    color: white;
    font-weight: 600;
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 15px;
  }

  .inputBox {
    position: relative;
    outline: none;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
      inset 2px 2px 5px rgba(0, 0, 0, 0.5),
      inset -3px -3px 5px rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 30px;
    padding: 15px 20px;
    width: 100%;
    font-size: 1em;
  }

  li {
    display: flex;
    position: relative;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    margin: 15px 0;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
      inset 2px 2px 5px rgba(0, 0, 0, 0.5),
      inset -3px -3px 5px rgba(0, 0, 0, 0.5);
    border-radius: 22.5px;
    background: #1f83f2;
    padding: 10px 10px 10px 45px;
    width: calc(100% - 40px);
    min-height: 45px;
    color: white;

    &.done {
      background: #607d8b;
      &:after {
        position: absolute;
        left: 16px;
        transform: rotate(315deg);
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
        width: 12px;
        height: 6px;
        content: '';
      }
    }

    &::before {
      position: absolute;
      left: 8px;
      border-radius: 50%;
      background: #2f363e;
      width: 30px;
      height: 30px;
      content: '';
    }

    i {
      --rotate-deg: -45deg;
      display: flex;
      position: absolute;
      right: -40px;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
        inset 2px 2px 5px rgba(0, 0, 0, 0.5),
        inset -3px -3px 5px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      background: #ff2c74;
      width: 30px;
      height: 30px;

      &::before,
      &::after {
        position: absolute;
        transform: rotate(var(--rotate-deg));
        background: #fff;
        width: 15px;
        height: 2px;
        content: '';
      }

      &:before {
        --rotate-deg: 45deg;
      }
    }
  }

  .list {
    position: relative;
    margin-top: 20px;
    padding-right: 10px;
    max-height: 350px;
    overflow-y: auto;
  }
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #fff;
}
</style>
