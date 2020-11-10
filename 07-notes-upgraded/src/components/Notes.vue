<template>
    <div class="notes">
        <div class="note" :class="[{full: !grid}, note.priority]" v-for="note in notes" :key="note.id">
            <div class="note-header">
                <p>{{note.title}}</p>
                <p style="cursor: pointer;" @click="$emit('remove', note.id)">x</p>
            </div>
            <div class="note-body">
                <p>{{note.description}}</p>
                <span>{{note.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            notes: {
                type: Array,
                required: true
            },
            grid: {
                type: Boolean,
                required: true
            }
        },
        methods: {
                deleteNote (index) {
                this.$emit('remove', index)
            }
        }
    }
</script>

<style lang="scss">
.notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #fff;
    transition: all .25s cubic-bezier(.02, .01, .47, 1);
    box-shadow: 0 30px 30px rgba($color: #000000, $alpha: .02);
    &:hover{
        box-shadow: 0 30px 30px rgba($color: #000000, $alpha: .04);
        transform: translate(0, -6px);
        transition-delay: 0s !important;
    }
    &.full{
        width: 100%;
    }
    &.high {
        background-color: #ff5353;
    }
    &.middle {
        background-color: #ffba53;
    }
}
.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-size: 22px;
        font-weight: bold;
        color: #2b2b2b;
    }
    &.full {
        justify-content: center;
    }
}
.note-body {

    p {
        margin: 20px 0;    
    }
    span {
        font-size: 14px;
        color: #999999;
    }
}
svg {
    color: #999;
    cursor: pointer;
    margin-right: 12px;
    &.active{
        color: #2b2b2b;
    }
    &:last-child {
        margin-right: 0;
    } 
}
</style>