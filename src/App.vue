<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import LoginLayout from '@layouts/LoginLayout'
import MainLayout from '@layouts/MainLayout'
import RegistrationLayout from '@layouts/RegistrationLayout'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'login') + '-layout'
    }
  },
  components: {
    LoginLayout,
    MainLayout,
    RegistrationLayout
  }
}
</script>

<style lang="sass">
@import "./assets/styles"
@import "./assets/media"
</style>
