<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand float-left">Vue-Firebase Auth</a>

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link pe-3">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="btn btn-outline-primary">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>