<template>
  <div class="post-preview">
    <div class="post-content">
      <h3 class="title">{{ post.title }}</h3>
      <img :src="post.img" :alt="post.title" />
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
//PostPreview
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post-preview {
  width: 33%;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
  img {
    margin-bottom: 20px;
  }
  &.post-content {
    p {
      color: #999999;
    }
  }
}
</style>
