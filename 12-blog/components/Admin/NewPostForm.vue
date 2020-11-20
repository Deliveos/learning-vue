<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="save">
        <AppInput v-model="post.title">Title: </AppInput>
        <AppInput v-model="post.description">Description: </AppInput>
        <AppInput v-model="post.img">Image link: </AppInput>
        <AppTextArea v-model="post.content">Content: </AppTextArea>

        <div class="controls">
          <AppButton>Save</AppButton>
          <div @click="cancel" class="btn btnDanger">Cancel</div>
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
      this.$emit("save", this.post)
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
