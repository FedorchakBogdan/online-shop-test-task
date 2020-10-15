<template>
  <Form
    @submit="submitHandler"
  />
</template>

<script>
import Form from './components/Form'
import { mapActions } from 'vuex'
export default {
  name: 'Edit',
  components: {
    Form
  },
  methods: {
    ...mapActions('products', ['updateProduct', 'uploadPhotoToDocument']),
    async submitHandler (data) {
      await this.updateProduct({ id: this.$route.params.id, data: data }).then(() => {
        this.$router.push({ name: 'products.index' })
      })
    }
  }
}
</script>

<style scoped>

</style>
