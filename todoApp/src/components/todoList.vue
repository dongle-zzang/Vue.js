<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">
        {{ todoItem }}
        <button @click="rmItem(todoItem)" class="rmBtn"></button>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        todoItems: [],
      }
    },
    methods: {
      rmItem(todoItem) {
        localStorage.removeItem(todoItem);
      }
    },
    created: function() {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i ++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            this.todoItems.push(localStorage.key(i));
          }
        }
      }
    },
  }
  </script>

  <style scoped>
    ul {
      list-style: none;
      width: 400px;
      margin: 30px auto 10px;
    }

    li {
      padding: 0 10px;
      text-align: left;
      line-height: 26px;

      display: flex;
      justify-content: space-between;
    }
    li+li{
      margin-top: 5px;
      border-top: 1px dashed #888;
    }

    .rmBtn{
      width: 16px;
      height: 16px;
      background: #E89582;
      border: none;
      border-radius: 50%;
      color: #fff;
      margin: 6px 0 0 4px;
      cursor: pointer;
      transition: 0.3s;
    }
    .rmBtn:hover{
      background: #df4c2b;
    }
    </style>