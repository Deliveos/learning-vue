<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contacts</h2>

      <Message :message="message" v-if="message" />
      <!-- contacts form -->
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name">Name: </AppInput>
        <AppInput v-model="user.email" type="email">Email: </AppInput>
        <AppTextArea v-model="user.text">Text</AppTextArea>
        <!-- button -->
        <div class="controls">
          <AppButton class="btnWhite">Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = "Submited!"

      this.user.name = ""
      this.user.email = ""
      this.user.text = ""
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #444ce0;
  color: #ffffff;
  .controls {
    margin: 30px;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .title {
    color: #ffffff;
  }
}
</style>
