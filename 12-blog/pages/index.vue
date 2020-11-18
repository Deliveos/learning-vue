<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Home" />
    <PostsList :posts="posts" />
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
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          posts: [
            {
              id: 1,
              title: "1 post",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              img:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2INvFFFf0b5PSDwithgfbwHaHa%26pid%3DApi&f=1"
            }
          ]
        })
      }, 1500)
    })
      .then(data => {
        return data
      })
      .catch(e => {
        context.erro(e)
      })
  }
}
</script>
