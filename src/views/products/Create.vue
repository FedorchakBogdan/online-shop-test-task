<template>
  <Form
    @submit="submitHandler"
  />
</template>

<script>
import Form from './components/Form'
import { mapActions } from 'vuex'
export default {
  name: 'Create',
  components: {
    Form
  },
  methods: {
    ...mapActions('products', ['createProduct']),
    async submitHandler (data) {
      await this.createProduct(data)
      this.$router.push({ name: 'products.index' })
    }
  }
}
</script>

<style scoped>

</style>
