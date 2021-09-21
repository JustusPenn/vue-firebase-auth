<template>
    <div class="auth">
        <div class="inner-block">
            <form @submit.prevent="forgetPassword">
                <h3>Forgot Password</h3>
                
                <div class="alert alert-warning" v-show="message != null">{{ message }}</div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="user.email" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg w-100 mt-3">Reset password</button>
            </form>
        </div>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail} from 'firebase/auth'
export default {
    data() {
        return {
            user: {
                email: ''
            },
            message: null
        }
    },
    methods: {
        forgetPassword() {
            const auth = getAuth()
            sendPasswordResetEmail(auth, this.user.email).then(() => {
                this.message = 'Check your registered email to reset the password!';
                this.user = {
                    email: ''
                }                
                .then(() => {
                    this.$router.push('/login')
                });
            }).catch((error) => {
                this.message = error.message
            });
        }
    },
}   
</script>

<style>

</style>