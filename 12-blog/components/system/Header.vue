<template>
  <div>
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <!-- logo -->
            <div class="logo">BLOG</div>
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
          title: 'Home',
          path: '/',
        },
        {
          title: 'About',
          path: '/about',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar-link {
  &.nuxt-link-exact-active {
    color: #444ce0;
  }
}
</style>
