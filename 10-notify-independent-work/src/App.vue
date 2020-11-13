<template>
    <div class="wrapper">
      <header> 
        <div class="navbar">
          <div class="container">
            <div class="navbar-content">
              <!-- logo -->
              <div class="logo">NOTIFY</div>
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
  data() {
    return {
      links: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Notify',
          path: '/notify'
        }
      ]
    }
  },
}
</script>

<style lang='scss'>
a {
  &.router-link-exact-active {
  color: #42b983;
}
}

</style>
