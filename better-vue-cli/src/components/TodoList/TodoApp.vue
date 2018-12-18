<template>
  <div>
    <h2>TodoList</h2>
    <TodoHeader :addTodo="addTodo"/>
    <TodoMiddle :todoList="todoList" :removeTodo="removeTodo" :complete="complete"/>
    <TodoFooter :todoLength="todoList.length"/>
  </div>
</template>

<script>
  import TodoHeader from './TodoHeader'
  import TodoMiddle from './TodoMiddle'
  import TodoFooter from './TodoFooter'

  export default {
    data() {
      return {
        todo: '',
        todoList: [
          {
            content: 'AA',
            flag: false
          },
          {
            content: 'BB',
            flag: false
          },
        ]
      }
    },
    components: {
      TodoFooter, TodoMiddle, TodoHeader
    },
    methods: {
      addTodo(todo) {
        this.todoList.unshift(todo);
      },
      removeTodo(index) {
        this.todoList.splice(index, 1);
      },
      complete(index) {

      }
    }
  }
</script>

<style scoped>

</style>
