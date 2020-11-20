<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Home" />
    <PostsList :posts="loadedPosts" />
    <Contacts />
  </div>
</template>

<script>
import Promo from "@/components/Promo"
import Contacts from "../components/Contacts.vue"

export default {
  components: {
    Promo,
    Contacts
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.getLoadedPosts
    }
  }
}
</script>
