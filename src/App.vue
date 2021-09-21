<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand float-left">Vue-Firebase Auth</a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item" v-if="!user">
            <router-link to="/login" class="nav-link pe-3">Sign In</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link to="/register" class="btn btn-outline-primary">Sign Up</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <a @click.prevent="logOut" class="btn btn-outline-primary">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default {
  data() {
    return { 
      auth: getAuth()
    };
  },
  watch: {
    user(){
      return this.auth.currentUser;
    }
  },
  methods: {
    logOut() {
      signOut(this.auth).then(() => {
        onAuthStateChanged(this.auth, () => {
          this.$router.push('/login')
        })
      }).catch((error) => {
        alert(error.message)
      })
    }
  },
}
</script>

<style>

</style>