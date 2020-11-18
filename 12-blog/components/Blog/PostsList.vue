<template>
  <section class="post-list">
    <div class="container">
      <div class="posts-wrapper">
        <PostPreview
          :admin="admin"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"
export default {
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.posts-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
