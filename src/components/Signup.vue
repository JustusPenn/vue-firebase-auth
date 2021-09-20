<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>

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
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>