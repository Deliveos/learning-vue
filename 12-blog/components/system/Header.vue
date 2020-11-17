<template>
  <div>
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <!-- logo -->
            <div class="logo"><nuxt-link to="/">BLoG</nuxt-link></div>
            <!-- menu -->
            <ul class="navbar-list">
              <li
                class="navbar-item"
                v-for="(link, index) in links"
                :key="index"
              >
                <nuxt-link
                  :title="link.title"
                  :to="link.path"
                  class="navbar-link"
                  >{{ link.title }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Blog",
          path: "/blog"
        },
        {
          title: "About",
          path: "/about"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.logo {
  a {
    color: #333;
  }
}
.navbar-link {
  &.nuxt-link-exact-active {
    color: #444ce0;
  }
}
</style>
