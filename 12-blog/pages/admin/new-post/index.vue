<template>
  <div>
    <NewPostForm @save="onSubmit" />
  </div>
</template>

<script>
import NewPostForm from "@/components/Admin/NewPostForm.vue"
export default {
  layout: "admin",
  components: {
    NewPostForm
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch("addPost", post).then(() => {
        this.$router.push("/admin/")
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
