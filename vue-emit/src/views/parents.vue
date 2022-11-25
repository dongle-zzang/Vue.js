<template>
  <div class="container text-center">
    <h1>Counting</h1>
    <p>{{count}}</p>

    <child
      :count="count"
      @plus="plus"
      @reset="reset"
    ></child>

  </div>
</template>

<script>
import child from '@/views/child.vue';

export default {
  data(){
    return{
      count: 0,
    }
  },
  methods:{
    plus(){
      this.count++;
    },
    reset(){
      this.count = 0
    }
  },
  components: {
    child,
  },
}
</script>

<style scoped>

</style>