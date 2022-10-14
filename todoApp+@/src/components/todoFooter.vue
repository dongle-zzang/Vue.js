<template>
  <div>
    <button @click="ClearAll" class="clearBtn">Clear All</button>
  </div>
</template>

<script>
  export default {
    methods: {
      ClearAll() {
        localStorage.clear();
        this.$parent.updateList();
        console.log('All Cleared.');
      }
    }
  }
</script>

<style scoped>
  div{
    margin-top: 30px;
  }

  .clearBtn{
    border:none;
    padding: 10px 25px;
    border-radius: 8px;
    background: rgb(226, 226, 226);
    color: #222;
    cursor: pointer;
    transition: 0.3s;
  }
  .clearBtn:hover{
    color: rgb(226, 226, 226);
    background: #222;
  }
</style>