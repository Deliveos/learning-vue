<template>
    <div>
        <ModalWindow @close="$emit('close')" title="Sign in">
            <div slot="body">
                <form @submit.prevent="onSubmit">
                    <!-- email -->
                    <div class="form-item" :class="{ inputError: $v.email.$error }">
                        <p class="out-error" v-if="!$v.email.required">Field don't be empty!</p>
                        <p class="out-error" v-if="!$v.email.email">Email is not correct!</p>
                        <input  @change="$v.email.$touch()" v-model="email" :class="{error: $v.email.$error }" placeholder="Email">
                    </div>

                    <!-- password -->
                    <div class="form-item" :class="{ inputError: $v.password.$error }">
                        <p class="out-error" v-if="!$v.password.required">Field don't be empty!</p>
                        <input type="password" v-model.trim="$v.password.$model" @change="$v.email.$touch()" v-model="password" :class="{error: $v.email.$error }" placeholder="Password">
                    </div>

                    <button class="btn btnPrimary">Sign in</button>
                    <br>
                    <br>
                    <a @click.prevent="$emit('on-redirect')" class="link">sign up</a>
                </form>
            </div>
        </ModalWindow>
    </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import ModalWindow from '@/components/UI/ModalWindow.vue'

    export default {
        components: {
            ModalWindow
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        },
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            onSubmit () {
                this.$v.$touch()
                if(!this.$v.$invalid) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    console.log(user)
                    //reset fields
                    this.email = ''
                    this.password = ''
                    this.$v.$reset()
                    this.$emit('close')
                }
            }
        }
    }
</script>

<style lang="scss">
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