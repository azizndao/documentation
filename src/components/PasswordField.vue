<template>
  <v-text-field
      prepend-inner-icon="mdi-lock"
      :type="obscureText ? 'password' : 'text'"
      :value="value"
      @input="handleChange"
      :rules="[minValidator]"
      :append-icon="obscureText? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="obscureText = !obscureText"
      :placeholder="placeholder"/>
</template>

<script>
export default {
  name: 'NameField',
  props: {
    value: {type: String},
    placeholder: {type: String, default: 'Enter your password'}
  },
  data () {
    return {
      obscureText: true
    }
  },
  methods: {
    handleChange (newValue) {
      this.$emit('input', newValue)
    },
    minValidator (v) {
      const isValid = v.length >= 6
      this.$emit('valid', isValid)
      if (v === '') return 'This field is required'
      else if (!isValid) return 'At least 8 characters'
      return true
    }
  }
}
</script>

<style scoped>

</style>
