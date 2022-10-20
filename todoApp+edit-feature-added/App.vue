<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-list :todoItems.sync="todoItems" @="updateList"></todo-list>
    <todo-footer @="updateList"></todo-footer>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue';
import todoList from './components/todoList.vue';
import todoFooter from './components/todoFooter.vue';

export default {
  name: 'App',
  components: {
    'todo-footer': todoFooter,
    'todo-header': todoHeader,
    'todo-list': todoList
  },
  data(){
    return {
      todoItems : [],
    }
  },
  created(){
    this.setTodoList(); //when you refresh the page, it shows the list of current localStorage
  },
  methods : {
    updateList(){
      this.todoItems = []; //todoItems[] reset
      this.setTodoList();
    },
    setTodoList(){
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i ++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            this.todoItems.push(localStorage.key(i));
          }
        }//for end
      }
      this.todoItems.sort(); //to sort them
    }
  },
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
