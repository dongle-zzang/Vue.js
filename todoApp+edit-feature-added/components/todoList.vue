<template>
  <div>

    <!-- input -->
    <div>
      <div class="inputCover">
        <input v-model="newTodoItem" @keyup.enter="addTodo" type="text" placeholder="Input your todo's here">
        <button @click="addTodo" class="inputBtn"></button>
      </div>
    </div>

    <!-- modal -->
    <div v-show="modal" class="modal">
      <div class="modalBg">
        <input v-model="editTodoItem" v-show="modal" @keyup.enter="[modalEdit(), inputReset()]" placeholder="Edit your todo" class="editInput">
        <button @click="[modalCancel(), inputReset()]" class="cancelBtn">Cancel</button>
        <button @click="[modalEdit(), inputReset()]" class="editDoneBtn">Edit</button>
      </div>
    </div>

    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">
        {{ todoItem }}
        <button @click="editItem(todoItem)" class="editBtn"></button>
        <button @click="rmItem(todoItem)" class="rmBtn"></button>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        //input
        newTodoItem: "",
        //list
        modal: false,
        editTodoItem: '',
        oriText : '',
      }
    },
    props : [
      'todoItems'
    ],
    methods: {
      //input
      addTodo() {
        if(this.newTodoItem === ''){
          alert('Enter the Todo.');
        }
        else if(this.newTodoItem !== ''){
          console.log(`Added '${this.newTodoItem}' on localStorage.`);
          localStorage.setItem(this.newTodoItem, this.newTodoItem); //save
          this.newTodoItem=""; //reset
          this.$parent.updateList(); //when you added todo it shows on your screen before refresh
        }
      },

      //list
      rmItem(todoItem) {
        localStorage.removeItem(todoItem);
        this.$parent.updateList(); // screen에 찍어내는 역할
        console.log(`Deleted '${todoItem}' on localStorage.`);
      },
      editItem(todoItem){ //수정버튼 눌렀을 때
        //edit 버튼을 누르면 input 창이 생기고, 거기에 입력한 값이 todoItem이 되게 하기
        this.modal = true;
        this.oriText = todoItem;
        console.log('Edit Button Detected.');
      },
      modalCancel(){
        console.log('Canceled Edit.');
        this.modal = false;
      },
      modalEdit(){ //수정 완료하고 버튼 누를 때
        if(!this.editTodoItem) alert('Enter Your New Todo.');
        else if(this.editTodoItem) { //수정하고 로컬스토리지에 업데이트, input창 초기화
            if(this.editTodoItem == this.oriText){
              alert(`There is already '${this.editTodoItem}' in your list.
Please enter again your todo.`);
            }
            else{
              localStorage.removeItem(this.oriText);
              localStorage.setItem(this.editTodoItem, this.editTodoItem);
              this.$parent.updateList(); // screen에 찍어내는 역할
              this.modal = false;
              console.log(`Edited to '${this.editTodoItem}'.`);
            }
        },
        inputReset(){
        this.editTodoItem = ''; //input reset
        },
      }
  }
  </script>

  <style>
/* input */
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


  /* list */
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
      margin: 6px 0 0 4px;
      cursor: pointer;
      transition: 0.3s;
    }
    .rmBtn:hover{
      background: #df4c2b;
    }

    .editBtn{
      width: 16px; height: 16px;
      background: #F2DA88;
      border: none;
      border-radius: 50%;
      margin: 6px 4px 0 auto;
      cursor: pointer;
      transition: 0.3s;
    }
    .editBtn:hover{
      background: #f8ca31;
    }

    .modal{
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      display: block;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 11111;
    }
    .modalBg{
      position: relative;
      width: 400px;
      height: 50px;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: white;
      border-radius: 8px;

      padding: 50px 30px;
    }
    .editInput{
      width: 97%;
      display: block;
      height: 30px;
    }

    .cancelBtn{
      display: inline-block;
      width: 60px;
      height: 32px;
      background: gray;
      border: 0px;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;
      position: absolute;
      bottom: 5%;
      right: 16%;
    }
    .cancelBtn:hover{
      background: rgb(75, 75, 75);
    }

  .editDoneBtn{
    background: #90DB85;
    display: inline-block;
    width: 60px;
    height: 32px;
    border: 0px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 6px;
    position: absolute;
    bottom: 5%;
    right: 2%;
  }
  .editDoneBtn:hover{
    background: #21b90a;
  }
    </style>
