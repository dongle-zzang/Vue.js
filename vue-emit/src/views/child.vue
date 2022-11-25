<template>
  <div>
    <v-btn
      @click="event('plus')"
      class="mr-4"
      elevation="2"
      outlined
    >
      plus
    </v-btn>
    <v-btn
      @click="event('reset')"
      elevation="2"
      outlined
    >
      reset
    </v-btn>
  </div>
</template>

<script>
export default {
  props:['count',],
  methods:{
    event(val){
      this.$emit(`${val}`, this.count)
    },
  }
}
</script>

<style scoped>

</style>