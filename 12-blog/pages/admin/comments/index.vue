<template>
  <div>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']"
    >
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.name">
          <td>
            <span>{{ comment.name }}</span>
          </td>
          <td>
            <span>{{ comment.text }}</span>
          </td>
          <td>
            <span v-if="comment.pablish" class="status true"> Pablish </span>
            <span v-else class="status false"> Hiden </span>
          </td>
          <td>
            <span @click="changeStatus(comment)" class="link"> Change </span>
          </td>
          <td>
            <span @click="deleteComment(comment.id)" class="link"> Delete</span>
          </td>
        </tr>
      </tbody>
    </CommentTable>
  </div>
</template>

<script>
import axios from "axios"

import CommentTable from "@/components/Admin/CommentTable.vue"

export default {
  layout: "admin",
  components: {
    CommentTable
  },
  methods: {
    commentsLoading() {
      axios
        .get("https://blog-nuxt-d2d88.firebaseio.com/comments.json")
        .then(response => {
          let commentsArray = []
          Object.keys(response.data).forEach(key => {
            commentsArray.push({ ...response.data[key], id: key })
          })
          this.comments = commentsArray
        })
    },
    changeStatus(comment) {
      comment.pablish = !comment.pablish
      axios.put(
        `https://blog-nuxt-d2d88.firebaseio.com/comments/${comment.id}.json`,
        comment
      )
    },
    deleteComment(id) {
      axios
        .delete(`https://blog-nuxt-d2d88.firebaseio.com/comments/${id}.json`)
        .then(() => {
          this.commentsLoading()
        })
    }
  },
  data() {
    return {
      comments: []
    }
  },
  mounted() {
    this.commentsLoading()
  }
}
</script>

<style lang="scss" scoped></style>
