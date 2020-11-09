<template>
    <div class="item">
        <img :src="product.img" alt="Product">
        <p><router-link :to="/shop/ + product.id" class="link">{{ product.title }}</router-link></p>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                requared: true
            },
        },
    }
</script>

<style lang="scss" scoped>
.item {
    padding: 8px;
    width: 300px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 10px;
    p {
        text-align: center;
    }
}
</style>