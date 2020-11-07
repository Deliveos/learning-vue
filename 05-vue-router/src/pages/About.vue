<template>
    <div class="wrapper">

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
              <h1>About page</h1>
              <br>
              <p>{{ getMessage }}</p>
              <br>
              <input type="text" v-model="message">
              <button  class="btn btnPrimary" @click="setMessage">Save</button>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: null
            }
        },
        created () {
            this.message = this.$store.getters.getMessage
        },
        computed: {
            getMessage () {
                return this.$store.getters.getMessage
            }
        },
        methods: {
            setMessage () {
                this.$store.dispatch('setMessage', this.message)
            }
        }
    }
</script>

<style lang="scss">

</style>