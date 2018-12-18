<template>
  <div>
    <span>{{completeNumbers}}/{{todoLength}}</span>
    <button>清楚已完成的TODO</button>
  </div>
</template>

<script>
  export default {
    props: {
      completeNumbers: Number,
      todoLength: Number,
    }
  }
</script>

<style scoped>

</style>
