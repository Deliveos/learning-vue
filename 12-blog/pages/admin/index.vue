<template>
  <div>
    <PostsList :admin="true" :posts="posts" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2INvFFFf0b5PSDwithgfbwHaHa%26pid%3DApi&f=1"
        },
        {
          id: 2,
          title: "2 post",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffullhdwall.com%2Fwp-content%2Fuploads%2F2018%2F05%2FFree-Funny-Dog.jpg&f=1&nofb=1"
        },
        {
          id: 3,
          title: "3 post",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Qc3i75a1z2lc8NJ2qUB1VgHaHa%26pid%3DApi&f=1"
        }
      ]
    }
  }
}
</script>
