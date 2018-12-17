<template>
  <div>
    <h2>请发表你对Vue的评论</h2>
    <AddComment :addComment="addComment"/>
    <CommentList :comments="comments"/>
  </div>
</template>

<script>
  import AddComment from 'AddComment'
  import CommentList from 'CommentList'

  export default {
    name: "TodoList",
    data () {
      return {
        comments: [
          {
            name: 'admin',
            content: 'vue is so good'
          },
          {
            name: 'better',
            content: 'vue is so bad'
          },
          {
            name: 'boy',
            content: 'vue is so easy'
          }
        ]
      }
    },
    methods: {
      addComment(comment) {
        return this.comments.unshift(comment);
      }
    },
    components: {
      AddComment, CommentList
    }
  }
</script>

<style scoped>

</style>
