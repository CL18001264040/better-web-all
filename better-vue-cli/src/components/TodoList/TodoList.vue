<template>
  <div>
    <h2>请发表你对Vue的评论</h2>
    <AddComment/>
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
    components: {
      AddComment, CommentList
    }
  }
</script>

<style scoped>

</style>
