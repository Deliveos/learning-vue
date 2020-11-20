<template>
  <section class="authorization">
    <div class="container">
      <form @submit.prevent="onSubmit" class="authorization-form">
        <AppInput type="email" v-model="user.email">Login:</AppInput>
        <AppInput type="password" v-model="user.password">Password</AppInput>
        <div class="controls">
          <AppButton>Login</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then(res => {
          this.$router.push("/admin")
          //reset
          this.user.email = ""
          this.user.password = ""
        })
        .catch(e => {
          this.user.email = ""
          this.user.password = ""
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.authorization {
  .authorization-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
    flex-direction: column;
  }
  text-align: center;
  input {
    width: 400px;
  }
}
</style>
