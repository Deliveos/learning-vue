<template>
  <div class="wrapper">
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <Search
            :value="search"
            placeholder="Username"
            @search="search = $event"
          />
          <button
            class="btn btnPrimary"
            @click="$store.dispatch('setInfo', search)"
          >
            Search
          </button>

          <!-- error -->
          <div class="error" v-show="error">
            <p>{{ error }}</p>
          </div>

          <!-- user info -->
          <User v-show="!error" />

          <!-- output -->
          <table class="repos-wrapper" v-show="repos">
            <!-- <thead>
              <th>
                <tr class="repos-info">
                  <span>Name</span
                  ><span>Stars</span>
                </tr>
              </th>
            </thead> -->
            <tbody v-for="repo in repos" :key="repo.id">
              <tr class="repos-info">
                <a target="_blank" :href="repo.html_url" class="link">{{
                  repo.name
                }}</a>
                <span>{{ repo.stargazers_count }}⭐</span>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import User from "@/components/User";

import Search from "@/components/Search";
export default {
  name: "Home",
  components: {
    Search,
    User,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    repos() {
      return this.$store.getters.getRepos;
    },
    error() {
      return this.$store.getters.getError;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos-wrapper {
  width: 400px;
  margin: 30px 0;
  background-color: #ffffff;
  border-radius: 20px;
  tr {
    border-radius: 20px;
  }
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.error {
  width: 400px;
  text-align: center;
  background-color: #ffb6b6;
  color: #ff2020;
  margin-top: 40px;
  padding: 20px 0;
  border-radius: 20px;
}
</style>
