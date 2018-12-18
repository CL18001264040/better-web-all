<template>
  <div>
    <input type="checkbox" @click="completeTodo" @select="todo.flag">
    <span>{{todo.content}}</span>
    <button @click="remove">删除</button>
  </div>
</template>

<script>
  export default {
    props: {
      removeTodo: {
        type: Function,
        required: true
      },
      complete: {
        type: Function,
        required: true
      },
      todo: Object,
      index: Number
    },
    methods: {
      remove() {
        let {index, todo} = this;
        if (window.confirm(`你确定要删除${todo.content}吗?`)) {
          this.removeTodo(index);
        }
      },
      completeTodo() {
        let {index} = this;
        this.complete(index);
      }
    }
  }
</script>

<style scoped>

</style>
