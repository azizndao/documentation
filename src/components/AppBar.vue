<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <div class="d-flex align-center mx-md-5">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png"
          transition="scale-transition"
          width="40"
      />

      <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
          width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex">
      <v-btn text class="mx-1" exact :to="{name: 'Home'}">Home</v-btn>
      <v-btn text class="mx-1" :to="{name: 'Docs'}">Docs</v-btn>
      <v-btn text class="mx-1" :to="{name: 'Blog'}">Blog</v-btn>
      <v-btn text class="mx-1" :to="{name: 'Forum'}">Form</v-btn>
      <v-btn text class="mx-1" :to="{name: 'About'}">About</v-btn>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <template v-if="user">
        <v-btn class="mr-2" outlined :to="{name: 'Profile'}">{{ user.email }}</v-btn>
        <v-btn depressed color="error" @click="() => this.$auth.signOut()">Sign Out</v-btn>
      </template>
      <template v-else>
        <v-btn outlined color="error" class="mr-2" :to="{name: 'SignIn'}">Sign In</v-btn>
        <v-btn depressed color="error" :to="{name: 'SignUp'}">Sign Up</v-btn>
      </template>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  created () {
    this.$auth.onAuthStateChanged(user => this.user = user)
  },
  data () {
    return {
      user: this.$auth.currentUser
    }
  }
}
</script>

<style scoped>

</style>