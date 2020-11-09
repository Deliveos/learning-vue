<template>
    <div>

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container">
              <div class="product-wrapper">

                  <!-- slider -->
                    <div class="product-slider">
                        <carousel
                            :perPage="1" 
                            :autoplay="true" 
                            :autoplayTimeout=5000
                            :autoplayHoverPause="true" 
                            :navigationEnabled="true"
                            :paginationEnable="true"
                            paginationColor="#b3b3b3"
                            paginationActiveColor="#7ce281">
                            <slide class="VueCarousel-inner" v-for="img in product.galery" :key="img.name">
                                <img :src="img.img" :alt="img.name">
                            </slide>
                        </carousel>
                    </div>

                    <!-- content -->
                    <div class="product-content">
                        <h1 class="title">{{ product.title }}</h1>
                        <p>{{ product.descr }}</p>
                    </div>
              </div>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: null
            }
        },
        created () {
            this.product = this.$store.getters.getProduct(this.$route.params.id)
        },
    }
</script>

<style lang="scss">
.product-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.product-slider,
.product-content {
    max-width: 48%;
}
.VueCarousel-inner {
    visibility: visible !important;
    flex-basis: 100% !important;
    width: 100% !important;
}
</style>