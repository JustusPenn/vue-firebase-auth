<template>
    <div class="auth">
        <div class="inner-block">
            <form @submit.prevent = 'userLogin'>
                <h3>Login</h3>

                <div class="alert" :class="success ? 'alert-success' : 'alert-danger'" v-show="message">
                    {{ message }}
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control form-control-lg" id="email" v-model="user.email">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control form-control-lg" id="password" v-model="user.password">
                </div>

                <button type="submit" class="btn btn-dark btn-lg w-100 mt-3">Sign In</button>

                <router-link to="/forgot-password" class="forgot-password text-right mt-2 mb-4">Forgot password ?</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                message: null,
                success: false
            }
        },
        methods: {
            userLogin() {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.user.email, this.user.password)
                .then(() => {
                    this.$router.push('/home')
                }).catch((error) => {
                    this.message = error.message
                });
            }
        },
    }
</script>

<style>

</style>