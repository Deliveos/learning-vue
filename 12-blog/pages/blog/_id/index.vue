<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <Comments :comments="comments" />
    <NewComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from "axios"

import Post from "@/components/Blog/Post.vue"
import NewComment from "@/components/Comments/NewComment.vue"
import Comments from "@/components/Comments/Comments.vue"

export default {
  components: {
    Post,
    NewComment,
    Comments
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-d2d88.firebaseio.com/posts/${context.params.id}.json`
      ),
      axios.get(`https://blog-nuxt-d2d88.firebaseio.com/comments.json`)
    ])
    //processing comments
    let commentsArray = Object.values(comments.data).filter(
      comment => comment.postId === context.params.id && comment.pablish
    )
    return {
      post: post.data,
      comments: commentsArray
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
