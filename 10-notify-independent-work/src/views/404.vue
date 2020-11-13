<template>
    <div class="wrapper">

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
                <h1>404</h1>
                <p class="nf">page not found</p>
                <p>Go to <router-link to="/" class="link">home page</router-link>?</p>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wrapper-content {
    margin: auto auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 100px;
        font-weight: bold;
    }
    .nf{
        font-size: 30px;
        font-weight: bold;
    }
}
</style>