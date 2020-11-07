<template>
    <div class="wrapper">

      <div class="wrapper-content">
        <section>
          <div class="container">
            <a @click.prevent="isModalSignIn = true" class="link">sign in</a>
            <span> / </span>
            <a @click.prevent="isModalSignUp = true" class="link">sign up</a>

            <SignIn @on-redirect="redirect" v-show="isModalSignIn" @close="isModalSignIn = false"/>
            <SignUp @on-redirect="redirect" v-show="isModalSignUp" @close="isModalSignUp = false"/>

          </div>
        </section>
      </div>

    </div>
</template>

<script>
import ModalWidow from '@/components/UI/ModalWindow.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

export default {
  name: 'App',
  components: {
    ModalWidow,
    SignIn,
    SignUp
  },
  data() {
    return {
      isModalSignIn: false,
      isModalSignUp: false
    }
  },
  methods: {
    redirect () {
      if(this.isModalSignIn || this.isModalSignUp) {
        this.isModalSignIn = !this.isModalSignIn
        this.isModalSignUp = !this.isModalSignUp
      }
    }
  }
}
</script>

<style lang="scss">

</style>
