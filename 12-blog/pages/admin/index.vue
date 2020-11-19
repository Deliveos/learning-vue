<template>
  <div>
    <PostsList :admin="true" :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    loadedPosts() {
      return this.$store.getters.getLoadedPosts
    }
  }
}
</script>
