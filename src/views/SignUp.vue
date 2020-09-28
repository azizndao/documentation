<template>
  <v-card max-width="512" elevation="12" class="mx-auto mt-5 py-2">
    <v-card-title>

    </v-card-title>
    <v-card-text>
      <v-alert type="error" text outlined v-if="err">{{ err.message }}</v-alert>
      <v-form :disabled="loading">
        <name-field
            v-model="userName"
            v-on:valid="v => this.validName = v"/>
        <email-field
            v-model="email"
            v-on:valid="v => this.validEmail = v"/>
        <password-field
            v-model="password"
            v-on:valid="v => this.validPassword = v"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn depressed color="error">Back</v-btn>
      <v-spacer></v-spacer>
      <v-btn
          depressed color="primary"
          @click="submit"
          :loading="loading"
          :disabled="!allValid || loading">Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import EmailField from '@/components/EmailField'
import PasswordField from '@/components/PasswordField'
import NameField from '@/components/NameField'

export default {
  name: 'SignUp',
  data () {
    return {
      userName: '',
      validName: false,
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
      return this.validName && this.validEmail && this.validPassword
    }
  },
  methods: {
    submit () {
      this.loading = true
      this.$auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(this.completeProfile)
          .catch(err => this.err = err)
          .finally(() => this.loading = false)
    },
    completeProfile ({user}) {
      return user.updateProfile({displayName: this.userName})
          .then(() => this.$router.replace('/'))
          .catch(err => this.err = err)
    }
  },
  components: {
    NameField,
    EmailField,
    PasswordField
  }
}
</script>