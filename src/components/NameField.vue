<template>
  <v-text-field
      :value="value"
      @input="handleChange"
      validate-on-blur
      :rules="[fullNameValidator]"
      prepend-inner-icon="mdi-account"
      :error="error"
      :placeholder="placeholder"/>
</template>

<script>

export default {
  name: 'NameField',
  props: {
    value: {type: String},
    placeholder: {type: String, default: 'Enter your full name'},
    errorMessage: {type: String}
  },
  data () {
    return {
      error: this.errorMessage
    }
  },
  methods: {
    handleChange (newValue) {
      this.$emit('input', newValue)
    },
    fullNameValidator (v) {
      let isValid = v.trim().split(' ').length >= 2
      this.$emit('valid', isValid)
      if (isValid) return true
      return 'You must provide your first and last names'
    }
  }
}
</script>

<style scoped>

</style>
