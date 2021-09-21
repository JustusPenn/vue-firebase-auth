<template>
	<div class="account">
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-3">Welcome {{ user.displayName }}</h1>
				<p class="lead">Firebase Auth App Working</p>
				<!-- <hr class="my-2"> -->
				<!-- <p></p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
				</p> -->
			</div>
		</div>
		<div class="container">
			<div class="d-flex align-items-center justify-content-between">
				<h2>{{ user.displayName }}</h2>
				<img :src="user.photoURL" :alt="user.displayName" class="img-fluid rounded-circle">
			</div>
		</div>

	</div>
</template>

<script>
import { getAuth } from 'firebase/auth'

export default {
	data() {
			return { 
		};
	},
	computed: {
		user(){
			return this.$store.state.user.data;
		},
		loggedIn() {
			return this.$store.state.user.loggedIn;
		}
	},
	created() {
		console.log(this.user, this.loggedIn);
		const auth = getAuth()

		if(!this.loggedIn) {
			this.$router.push('/login')
		} else {
			this.user = auth.currentUser;
		}
		// console.log(this.user);
		// const auth = getAuth();
		// if (auth.currentUser) {
			// this.user = auth.currentUser;
		// } else {
		// 	this.$router.push('/login');
		// }
	},
}
</script>

<style>

</style>