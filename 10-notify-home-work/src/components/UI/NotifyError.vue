<template>
  <div class="error">
    <p>{{ error.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error {
  margin: 30px 0;
  background-color: #ff9a9a;
  border-radius: 20px;
  p {
    padding: 20px;
    color: #ff2e2e;
  }
}
</style>
