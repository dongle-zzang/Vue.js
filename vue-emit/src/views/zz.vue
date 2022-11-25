<template>
  <div class="container">
    <p :class="errorTextColor">Hello there</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
    };
  },
  computed: {
    errorTextColor(){
      return this.isError ? 'red' : '';
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.red{
  color:red;
}
</style>