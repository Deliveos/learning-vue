<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title">Title: </AppInput>
        <AppInput v-model="post.description">Description: </AppInput>
        <AppInput v-model="post.img">Image link: </AppInput>
        <AppTextArea v-model="post.content">Content: </AppTextArea>

        <div class="controls">
          <AppButton @click="save">Save</AppButton>
          <AppButton @click="cancel" class="btnDanger">Cancel</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit
        ? {
            ...this.postEdit
          }
        : {
            title: "",
            description: "",
            img: "",
            content: ""
          }
    }
  },
  methods: {
    save() {
      this.$emit("submit", this.post)
    },
    cancel() {
      this.$router.push("/admin/")
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>
