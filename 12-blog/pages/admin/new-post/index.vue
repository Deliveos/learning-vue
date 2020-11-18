<template>
  <div>
    <NewPostForm @submit="onSubmit" />
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
      console.log(`post added`)
      console.log(post)
    }
  }
}
</script>

<style lang="scss" scoped></style>
