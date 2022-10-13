<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue';
import todoInput from './components/todoInput.vue';
import todoList from './components/todoList.vue';
import todoFooter from './components/todoFooter.vue';

export default {
  name: 'App',
  components: {
    'todo-footer': todoFooter,
    'todo-header': todoHeader,
    'todo-input': todoInput,
    'todo-list': todoList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

html, body{
  font-family: 'Noto Sans KR', sans-serif;
}
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
