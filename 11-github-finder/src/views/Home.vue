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
          <button class="btn btnPrimary" @click="getRepos">Search</button>

          <!-- error -->
          <div class="error" v-show="error">
            <p>{{ error }}</p>
          </div>

          <!-- output -->
          <div class="repos-wrapper" v-show="repos">
            <div class="repos" v-for="repo in repos" :key="repo.id">
              <div class="repos-info">
                <a target="_blank" :href="repo.html_url" class="link">{{
                  repo.name
                }}</a>
                <span>{{ repo.stargazers_count }}⭐</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axois from "axios";
import Search from "@/components/Search";
export default {
  name: "Home",
  components: {
    Search,
  },
  data() {
    return {
      search: "",
      repos: null,
      error: null,
    };
  },
  methods: {
    getRepos() {
      axois
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((response) => {
          console.log(response.data);
          this.error = null;
          this.repos = response.data;
        })
        .catch((error) => {
          console.error(error);
          this.repos = null;
          this.error = "Can't find this user";
        });
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
}
.repos {
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: 10px;
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
