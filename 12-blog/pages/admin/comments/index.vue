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
            <span v-if="comment.status" class="status true"> Pablish </span>
            <span v-else class="status false"> Hiden </span>
          </td>
          <td>
            <span @click="changeStatus(comment.id)" class="link"> Change </span>
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
import CommentTable from "@/components/Admin/CommentTable.vue"
export default {
  layout: "admin",
  components: {
    CommentTable
  },
  methods: {
    changeStatus(id) {
      console.log(`Change status comment with id ${id}`)
    },
    deleteComment(id) {
      console.log(`Delete comment with id ${id}`)
    }
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          name: "Flor",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          status: false
        },
        {
          id: 2,
          name: "Havier",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          status: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
