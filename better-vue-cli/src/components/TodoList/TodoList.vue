<template>
  <div>
    <h2>请发表你对Vue的评论</h2>
    <AddComment/>
    <CommentList/>
  </div>
</template>

<script>
  import AddComment from 'AddComment'
  import CommentList from 'CommentList'

  export default {
    name: "TodoList",
    components: {
      AddComment, CommentList
    }
  }
</script>

<style scoped>

</style>
