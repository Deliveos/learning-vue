<template>
  <div class="wrapper">
    <div class="wrapper-content wrapper-content--fixed">
      <section class="not-found">
        <div class="container">
          <div class="not-found_wrapper">
            <h1>404</h1>
            <p>page not found</p>
            <p>go to <nuxt-link to="/" class="link">home page</nuxt-link>?</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.not-found_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
}
</style>
