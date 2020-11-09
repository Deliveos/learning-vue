<template>
    <div>

      <div class="wrapper-content wrapper-content--fixed">
        <section>
          <div class="container item-wrapper">
              <ShopItem v-for="product in shopList" :key="product.id" :product="product"/>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
import ShopItem from '@/components/ShopItem'
    export default {
        components: {
            ShopItem
        },
        data() {
            return {
                shopList: null
            }
        },
        created () {
            this.shopList = this.$store.getters.getShopList;
        },
    }
</script>

<style lang="scss" scoped>
.item-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>