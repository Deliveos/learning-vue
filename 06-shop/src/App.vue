<template>
    <div class="wrapper">
      <header> 
        <div class="navbar">
          <div class="container">
            <div class="navbar-content">
              <!-- logo -->
              <div class="logo">KrosovKI</div>
              <!-- menu -->
              <ul class="navbar-list">
                <li class="navbar-item" v-for="(link, index) in links" :key="index">
                  <router-link :title="link.title" :to="link.path" class="navbar-link">{{ link.title }}</router-link>
                </li>
              </ul>
              
              </div>
          </div>
        </div>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      links: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Shop',
          path: '/shop'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #7ce281;
  }
}
</style>
