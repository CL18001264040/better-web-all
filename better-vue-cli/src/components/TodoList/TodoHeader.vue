<template>
  <div>
    <h2>添加TODO</h2>
    <label>
      <input type="text" v-model="content" @keyup.enter="add"/>
    </label>
    <button @click="add">添加</button>
  </div>
</template>

<script>
  export default {
    props: {
      addTodo: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        content: ''
      }
    },
    methods: {
      add() {
        let content = this.content.trim();
        if (!content) {
          alert('todo is not be null or empty')
        }
        let todo = {
          content: content,
          flag: false
        };
        this.addTodo(todo);
        this.content = ''
      }
    }
  }
</script>

<style scoped>

</style>
