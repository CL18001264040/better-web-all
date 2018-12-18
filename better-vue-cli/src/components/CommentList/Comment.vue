<template>
  <div>
    <span>{{comment.name}} 说Vue {{comment.content}}</span>
    <button @click="deleteCommentItem">删除</button>
  </div>
</template>

<script>
  export default {
    props: {
      comment: Object,
      deleteComment: Function
    },
    data() {
      return {}
    },
    methods: {
      deleteCommentItem() {
        let {comment, index} = this;
        if (window.confirm(`你确定要删除${comment.name}评论吗?`)) {
          this.deleteComment(index)
        }
      }
    }
  }
</script>

<style scoped>

</style>
