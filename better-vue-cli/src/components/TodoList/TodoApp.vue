<template>
  <div>
    <h2>TodoList</h2>
    <input type="text" placeholder="请输入TODO" v-model="todo" @keyup.enter="addTotoItem"/>
  </div>
</template>

<script>
  import TodoHeader from './TodoHeader'
  import TodoMiddle from './TodoMiddle'
  import TodoFooter from './TodoFooter'
  export default {
    data() {
      return {
        todo: ''
      }
    },
    comments: {
      TodoFooter, TodoMiddle, TodoHeader
    },
    methods: {
      addTotoItem() {

      }
    }
  }
</script>

<style scoped>

</style>
