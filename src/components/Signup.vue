<template>
    <div class="auth">
        <div class="inner-block">
            <form @submit.prevent="userRegistration">
                <h3>Sign Up</h3>

                <div class="alert alert-warning" v-show="message">
                    {{ message }}
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control form-control-lg" v-model="user.name" />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control form-control-lg" v-model="user.email" />
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control form-control-lg" v-model="user.password" />
                </div>

                <button class="mt-3 btn btn-dark w-100">
                    Sign Up
                </button>

                <p class="forgot-password text-end">
                    Already Registered
                    <router-link :to="{ name: 'login' }">Sign in?</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    passsword: ''
                },
                message: ''
            };
        },
        methods: {
            userRegistration() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
                .then(() => {
                    this.message = 'Account created Successfully'
                    updateProfile(auth.currentUser, {
                        displayName : this.user.name,
                        photoURL: 'https://ui-avatars.com/api/?name='+ this.user.name + '&background=random' 
                    }).
                    then(() =>{
                        this.$router.push('/login')
                    })
                })
                .catch((error) => {
                    this.message = error.message
                    console.log(this.message);
                });
            }
        },
    }
</script>

<style scoped>

</style>