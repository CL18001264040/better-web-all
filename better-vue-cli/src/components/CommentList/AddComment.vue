<template>
  <div>
    请输入名称:
    <input type="text" v-model="name"/> <br>
    请输入评论:
    <input type="text" v-model="content"/> <br>
    <button @click="add">添加评论</button>
  </div>
</template>

<script>
  export default {
    props: {
      addComment: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add() {
        let name = this.name.trim();
        let content = this.content.trim();

        if (!name || !content) {
          alert('name and content is not be null or empty');
          return;
        }

        let comment = {
          name: name,
          content: content
        };
        this.addComment(comment);
      }
    }
  }
</script>

<style scoped>

</style>
