<template>
    <div>
        <input v-model="note.title" type="text" placeholder="Title">

        <div class="radio-group">
            <div class="radio">
                <label for="high">high</label>
                <input v-model="note.priority" id="high" type="radio" name="priority" value="high">
            </div>
            <div class="radio">
                <label for="middle">middle</label>
                <input v-model="note.priority" id="middle" type="radio" name="priority" value="middle">
            </div>
            <div class="radio">
                <label for="low">low</label>
                <input v-model="note.priority" id="low" type="radio" name="priority" value="low" checked>
            </div>
        </div>
        <textarea v-model="note.description" name="description" placeholder="Description"></textarea>
        <button class="btn btnPrimary" @click="addNote">Add note</button>
    </div>
</template>

<script>
    export default {
        props: {
            note: {
                type: Object,
                required: true
            }
        },
        methods: {
            addNote () {
                this.$emit('addNote', this.note)
            }
        }
    }
</script>

<style lang="scss" scoped>
button {
    margin: 20px 0;
}
.radio-group {
    display: flex;
    flex-direction: row;
}
.radio {
    margin: 0 20px;
}
</style>