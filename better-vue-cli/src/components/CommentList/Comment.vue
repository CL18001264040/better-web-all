<template>
  <div>
    <span>{{comment.name}} 说Vue {{comment.content}}</span>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      comment: Object
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
