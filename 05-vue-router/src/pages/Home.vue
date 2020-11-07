<template>
    <div class="wrapper">

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
              <h1>Home page</h1>
              <p>Message in store is <q>{{ getMessage }}</q></p>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
    export default {
        computed: {
            getMessage () {
                return this.$store.getters.getMessage
            }
        }
    }
</script>

<style lang="scss">

</style>