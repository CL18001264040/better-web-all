<template>
  <div>
    <ul>
      <Comment v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
  import Comment from './Comment'

  export default {
    name: "CommentList",
    props: {
      comments: Object
    },
    components: {
      Comment
    }
  }
</script>

<style scoped>

</style>
