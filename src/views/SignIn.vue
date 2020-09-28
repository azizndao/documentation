<template>
  <v-card max-width="512" elevation="12" class="mx-auto mt-5 py-2">
    <v-card-title>
      <span class="text-h3 font-weight-light">Connexion</span>
    </v-card-title>
    <v-card-text>
      <v-alert type="error" text outlined v-if="err">{{ err.message }}</v-alert>
      <v-form :disabled="loading">
        <email-field
            v-model="email"
            v-on:valid="v => this.validEmail = v"/>
        <password-field
            v-model="password"
            v-on:valid="v => this.validPassword = v"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn depressed color="error" @click="() => this.$router.back()">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn
          depressed color="primary"
          @click="submit"
          :loading="loading"
          :disabled="!allValid || loading">Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import EmailField from '@/components/EmailField'
import PasswordField from '@/components/PasswordField'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      validEmail: false,
      password: '',
      validPassword: false,
      loading: false,
      err: undefined
    }
  },
  computed: {
    allValid () {
      return this.validEmail && this.validPassword
    }
  },
  methods: {
    submit () {
      this.loading = true
      this.$auth.signInWithEmailAndPassword(this.email, this.password)
          .then(() => this.$router.replace('/'))
          .catch(err => this.err = err)
          .finally(() => this.loading = false)
    }
  },
  components: {
    EmailField,
    PasswordField
  }
}
</script>