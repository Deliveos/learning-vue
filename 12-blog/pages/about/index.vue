<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="about">
        <div class="container">
          <h1 class="title">About my blog</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <client-only>
            <Intro title="Lorem ipsum dolor sit amet" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.careergirls.org%2Fwp-content%2Fuploads%2F2018%2F05%2FIndustrial_Designer1920x1080.jpg&f=1&nofb=1"
              alt=""
            />
          </client-only>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Intro from "@/components/UI/Intro"

export default {
  components: {
    Intro
  }
}
</script>

<style lang="scss" scoped>
.about {
  p {
    margin-bottom: 10px;
  }
}
</style>
