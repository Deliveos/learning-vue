<template>
  <div>
    <NewPostForm :postEdit="post" @save="onSubmit" />
  </div>
</template>

<script>
import axios from "axios"

import NewPostForm from "@/components/Admin/NewPostForm.vue"
export default {
  layout: "admin",
  components: {
    NewPostForm
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin/")
      })
    }
  },
  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-d2d88.firebaseio.com/posts/${context.params.postid}.json`
      )
      .then(response => {
        return {
          post: { ...response.data, id: context.params.postid }
        }
      })
      .catch(e => console.error(e))
  }
}
</script>

<style lang="scss" scoped></style>
