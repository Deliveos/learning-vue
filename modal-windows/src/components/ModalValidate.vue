<template>
    <div>
        <Modal title="Modal with validate form" @close="$emit('close')">
            <div slot="body">
                <form @submit.prevent="onSubmit">
                    <!-- name -->
                    <div class="form-item" :class="{ inputError: $v.name.$error }">
                        <p class="out-error" v-if="!$v.name.required">Field dont't be empty!</p>
                        <p class="out-error" v-if="!$v.name.minLength">Name can't be less than {{ $v.name.$params.minLength.min }} letters!</p>
                        <input @change="$v.name.$touch()" v-model="name" :class="{error: $v.name.$error }" placeholder="Name">
                    </div>
                    <!-- email -->
                    <div class="form-item" :class="{ inputError: $v.email.$error }">
                        <p class="out-error" v-if="!$v.email.required">Field don't be empty!</p>
                        <p class="out-error" v-if="!$v.email.email">Email is not correct!</p>
                    <input  @change="$v.email.$touch()" v-model="email" :class="{error: $v.email.$error }" placeholder="Email">
                    </div>
                    <button class="btn btnPrimary">DONE</button>
                </form>
            </div>
        </Modal>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import Modal from '@/components/UI/Modal.vue'

export default {
    components: {
        Modal
    },
    data() {
        return {
            name: '',
            email: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3)
        },
        email: {
            required,
            email
        }

    },
    methods: {
        onSubmit () {
            this.$v.$touch()
            if(!this.$v.$invalid) {
                const user = {
                    name: this.name,
                    email: this.email
                }
                console.log(user)
                //reset fields
                this.name = ''
                this.email = ''
                this.$v.$reset()
                this.$emit('close')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.form-item .out-error {
    display: none;
    margin-bottom: 8px;
    font-size: 12px;
    color: #ff4d4d;
}
.form-item {
    &.inputError .out-error {
    display: block;
    }
} 
input .error{
    border-color: #ff4d4d;;
}
</style>