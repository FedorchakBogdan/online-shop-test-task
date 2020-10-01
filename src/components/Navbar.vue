<template>
    <v-app-bar
        height="65"
        app
        fixed
        clipped-left
        color="#074D65"
        class="main-navbar"
    >
        <v-toolbar-title>
            <img
                class="fm_logo"
                src="/images/Fleet-Marshall-logo%20.png"
                alt=""
            />
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="nav-bar-icons" icon @click="logoutHandler()">
            <v-icon> mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    ...mapActions('auth', ['authLogout']),
    async logoutHandler () {
      await this.authLogout()
    }
  }
}
</script>

<style lang="scss" scoped>
    .fm_logo {
        width: 70px;
        height: 56px;
        margin-top: 10px;
    }
</style>
