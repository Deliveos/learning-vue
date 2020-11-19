<template>
  <section class="comment">
    <div class="container">
      <h2 class="title">New comment</h2>

      <Message :message="message" v-if="message" />

      <form @submit.prevent="onSubmit" class="comment-form">
        <AppInput v-model="comment.name">Name: </AppInput>
        <AppTextArea v-model="comment.text">Comment: </AppTextArea>
        <!-- button -->
        <div class="controls">
          <Button>Send comment</Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: null,
      comment: {
        name: "",
        text: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          pablish: false,
          ...this.comment
        })
        .then(res => {
          this.message = "Comment has been sent for processing!"
          //Reset fields
          this.comment.name = ""
          this.comment.text = ""
        })
        .catch(e => console.error(e))
    }
  }
}
</script>

<style lang="scss">
.comment {
  text-align: center;
  .controls {
    margin: 30px;
  }
  .comment-form {
    max-width: 600px;
    margin: 30px auto;
  }
}
</style>
