<template>
    <div class="message">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
p {
    color: #f72e2e;
}
.message {
    padding: 15px;
    text-align: center;
    border-radius: 10px;
    background-color: #ffcccc;
}
</style>