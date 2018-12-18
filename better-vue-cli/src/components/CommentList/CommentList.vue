<template>
  <div>
    <ul>
      <Comment v-for="(comment, index) in comments" :key="index" :index="index" :comment="comment" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>

<script>
  import Comment from './Comment'

  export default {
    props: {
      comments: Object,
      deleteComment: Function
    },
    components: {
      Comment
    }
  }
</script>

<style scoped>

</style>
