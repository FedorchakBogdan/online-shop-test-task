<template>
  <v-container>
    <v-row >
      <v-col cols="2" class="ml-auto">
        <v-btn
          color="success"
          @click="$router.push({ name: 'products.create'})"
        >
          Add Product
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"
        v-for="item in getProducts"
        :key="item.id"
      >
        <div>
          <v-app id="inspire">
            <v-card
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                v-if="item.photo"
                height="250"
                :src=item.photo
              ></v-img>
              <v-img
                v-else
                height="250"
                src=https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg
              ></v-img>

              <v-card-title>{{item.title}}</v-card-title>

              <v-card-text>
                <div class="my-4 subtitle-1">
                  {{item.price}} $
                </div>

                <div>{{ item.description }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title v-if="item.percent">
                Sale: -{{item.percent}}%
              </v-card-title>
              <v-card-text
                v-if="item.percentDate"
              >
                Date sale off: {{item.percentDate}}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="editHandler(item.id)"
                >
                  Edit
                </v-btn>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="deleteHandler(item.id)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-app>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MainPage',
  data () {
    return {
      products: []
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts', 'deleteProduct', 'getProductsById']),
    async deleteHandler (productId) {
      await this.deleteProduct(productId).then(() => {
        this.fetchProducts()
      })
    },
    async editHandler (productId) {
      await this.getProductsById(productId)
      this.$router.push({ name: 'products.edit', params: { id: productId } })
    }
  },
  computed: {
    ...mapGetters('products', ['getProducts', 'getCurrentProduct'])
  },
  async created () {
    await this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
