<template>
  <v-app>
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from '@/components/AppBar'

export default {
  name: 'App',
  created () {
    this.$router.beforeEach((to, from, next) => {
      if (this.$auth.currentUser !== null) {
        if (to.name === 'SignIn' || to.name === 'SignUp') {
          this.$auth.signOut()
        }
      }
      next()
    })
  },
  components: {
    AppBar
  },

  data: () => ({
    //
  })
}
</script>
