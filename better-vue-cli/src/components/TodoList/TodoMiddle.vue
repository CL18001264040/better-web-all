<template>
  <div>
    <TodoItem v-for="(todo, index) in todoList" :key="index" :index="index" :removeTodo="removeTodo" :todo="todo" :complete="complete"/>
  </div>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    props: {
      todoList: {
        type: Array,
        required: true
      },
      removeTodo: {
        type: Function,
        required: true
      },
      complete: {
        type: Function,
        required: true
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style scoped>

</style>
