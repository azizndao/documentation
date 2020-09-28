<template>
  <v-text-field
      :value="value"
      :placeholder="placeholder"
      :error="error"
      prepend-inner-icon="mdi-email"
      clearable
      @input="emitChange"
      :rules="[emailValidator]"
  ></v-text-field>
</template>

<script>
export default {
  name: 'EmailField',
  props: {
    value: String,
    placeholder: {
      type: String,
      default: 'Enter your email address'
    },
    errorMessage: String
  },
  data () {
    return {
      error: this.errorMessage
    }
  },
  methods: {
    emitChange (v) {
      this.$emit('input', v)
    },
    emailValidator (v) {
      const isValid = /^\S+@\S+\.\S+$/.test(v)
      this.$emit('valid', isValid)
      if (v === '') return 'This field is required'
      else if (!isValid) return 'This email is not valid'
      else return true
    }
  }
}
</script>

<style scoped>

</style>