<template>
  <div class="user-wrapper" v-if="!user.isUser">
    <div class="user-logo">
      <img :src="user.avatar_url" :alt="user.login" />
    </div>
    <div class="user-info">
      <p class="user-name">{{ user.login }}</p>
      <hr />
      <div>
        <table>
          <tbody>
            <tr>
              <td>repositories</td>
              <td>{{ user.public_repos }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-wrapper {
  width: 400px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 80px 1fr;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
}
.user-logo {
  img {
    width: 60px;
    height: auto;
  }
}
.user-name {
  font-weight: bold;
}
hr {
  margin-top: 5px;
  color: #494ce8;
}
</style>
