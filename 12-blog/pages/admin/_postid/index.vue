<template>
  <div>
    <NewPostForm :postEdit="post" @submit="onSubmit" />
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
      console.log(`post edited`)
      console.log(post)
    }
  },
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2INvFFFf0b5PSDwithgfbwHaHa%26pid%3DApi&f=1"
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
