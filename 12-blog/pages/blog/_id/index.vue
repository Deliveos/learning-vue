<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <NewComment />
    <Comments :comments="comments" />
  </div>
</template>

<script>
import Post from "@/components/Blog/Post.vue"
import NewComment from "@/components/Comments/NewComment.vue"
import Comments from "../../../components/Comments/Comments.vue"

export default {
  components: {
    Post,
    NewComment,
    Comments
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
      },
      comments: [
        {
          name: "Flor",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          name: "Havier",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
  .post-header {
    text-align: center;
    margin-bottom: 30px;
    p {
      color: #999;
    }
  }
  img {
    max-width: 400px;
    margin-bottom: 20px;
  }
  .post-body {
    text-align: left;
  }
}
</style>
