<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments</h2>
      <p class="no-comments" v-if="!comments.length">No comments</p>
      <div class="comment" v-for="(comment, index) in comments" :key="index">
        <p class="name">{{ comment.name }}</p>
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  max-width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 30px auto;
  .name {
    font-size: 20px;
    margin-bottom: 12px;
  }
}
.title,
.no-comments {
  text-align: center;
}
</style>
