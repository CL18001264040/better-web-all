<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "AddComment",
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      addComment() {
        let name = this.name.trim()
        let content = this.content.trim()

        if (!name || !content) {
          alert('name and content is not be null or empty');
          return;
        }

        let comment = {
          name: name,
          content: content
        }


      }
    }
  }
</script>

<style scoped>

</style>
