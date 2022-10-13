<template>
  <div>

    <div class="inputCover">
      <input v-model="newTodoItem" @keyup.enter="addTodo" type="text" placeholder="input your todo's here">
      <button @click="addTodo" class="inputBtn"></button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodo() {
        console.log(this.newTodoItem);
        localStorage.setItem(this.newTodoItem, this.newTodoItem); //save
        this.newTodoItem=""; //reset
      },
    }
  }

</script>

<style>
  .inputCover{
    padding-left: 20px;
    width: 300px;
    margin: auto;
  }

  .inputCover>input{
    border: 0px;
    border-bottom: 1px solid gray;
  }
  input:focus {
  outline: none;
  }

  .inputCover .inputBtn{
    display: inline-block;
    width: 16px;
    height: 16px;

    background: #90DB85;
    border: none;
    border-radius: 50%;
    color: #fff;
    margin-left: 4px;
    cursor: pointer;
    transition: 0.3s;
  }
  .inputCover .inputBtn:hover{
    background: #21b90a;
  }

</style>
