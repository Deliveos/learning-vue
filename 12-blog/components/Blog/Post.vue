<template>
  <section class="post">
    <div class="container">
      <!-- header -->
      <div class="post-header">
        <h1 class="title">{{ post.title }}</h1>
        <img :src="post.img" :alt="post.title" />
        <p>{{ post.description }}</p>
      </div>

      <!-- body -->
      <div class="post-body">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
