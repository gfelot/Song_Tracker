<template lang="html">
  <div class="">
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email" />
    <br>
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password" />
    <br>
    <button
      type="button"
      name="button"
      @click="register">
        Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/Authentication'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped lang="css">
</style>
