<template>
  <div class="auth-form">
    <h1 class="account-title">Sing In</h1>
    <form method="POST" v-on:submit.prevent="login" id="login-form">
      <div class="account-form-element">
        <label class="account-label">Name*</label>
        <v-text-field
          class="fm-input"
          id="name"
          placeholder="Name entered here"
          required
          v-model="name"
        />
      </div>
      <div class="account-form-element">
        <label class="account-label">Email*</label>
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
        <label class="account-label">Password*</label>
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
            Sing In
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    remember: false,
    active: true
  }),
  methods: {
    ...mapActions('auth', ['registrationUser']),
    async login () {
      try {
        await this.registrationUser({
          email: this.email,
          password: this.password,
          name: this.name
        })
        this.$router.push({ name: 'login' })
      } catch (e) {
      }
    }
  }
}
</script>
