<template>
  <div class="message" :class="messClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    messClass: {
      type: String,
      default: "success"
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.message {
  max-width: 400px;
  padding: 30px;
  border-radius: 20px;
  margin: 0 auto;
  &.success {
    color: #26de81;
    background-color: #cbffe5;
  }
  &.error {
    color: #fc5c65;
    background-color: #ffc7ca;
  }
}
</style>
