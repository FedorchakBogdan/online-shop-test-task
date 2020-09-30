<template>
  <div class="auth-form">
    <h1 class="account-title">Login</h1>
    <form method="POST" v-on:submit.prevent="login" id="login-form">
      <div class="account-form-element">
        <label class="account-label">Enter username</label>
        <v-text-field
          class="fm-input"
          type="email"
          id="email"
          name="email-address"
          placeholder="Username entered here"
          required
          v-model="email"
        />
        <div class="account-error" role="alert">
          <div></div>
        </div>
      </div>
      <div class="account-form-element">
        <label class="account-label">Enter Password</label>
        <v-text-field
          class="fm-input"
          type="password"
          id="password"
          name="password"
          placeholder="Password entered here"
          required
          v-model="password"
        />
        <div class="account-error" role="alert">
          <div></div>
        </div>
      </div>
      <div class="account-error mt-3" role="alert">
        <div></div>
        <div></div>
      </div>
      <v-row>
        <v-col cols="12">
          <v-btn
            type="submit"
            block
            form="login-form"
            class="fm-button-primary"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
      <v-alert type="error" v-bind:class="{ 'alert-visibility': active }">
        Login or password incorrect, please try again.
      </v-alert>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    email: '',
    password: '',
    remember: false,
    active: true
  }),
  computed: {
    ...mapGetters('auth', ['getIsAuth'])
  },
  methods: {
    ...mapActions('auth', ['loginRequest']),
    async login () {
      try {
        await this.loginRequest({
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        this.active = false
      }
    }
  }
}
</script>
