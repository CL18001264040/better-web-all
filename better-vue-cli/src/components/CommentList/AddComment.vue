<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "AddComment",
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
