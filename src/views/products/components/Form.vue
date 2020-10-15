<template>
  <div>
    <v-row class="justify-center align-content-center"  v-if="loading">
      <vue-loaders class="justify-center" name="line-spin-fade-loader" color="blue" scale="1"/>
    </v-row>
    <v-form
      v-else
      class="unit-form"
      v-model="valid"
      ref="form"
      lazy-validation
    >
      <v-row
        justify="space-around"
      >
        <v-col cols="4">
          <label class="fm-label">Title*</label>
          <v-text-field
            v-model="title"
            placeholder="Title"
            class="fm-input"
            :rules="[rules.required, rules.minLength, rules.maxLength]"
          />
        </v-col>
        <v-col cols="4">
          <label class="fm-label">Photo*</label>
          <v-file-input
            label="File input"
            filled
            class="fm-input uploader-input"
            v-model="photo"
          ></v-file-input>
        </v-col>
        <v-col cols="4">
          <label class="fm-label">Description</label>
          <v-textarea
            class="fm-textarea"
            outlined
            label="Description"
            placeholder="Description"
            counter="200"
            :rules="[rules.maxTextareaLength]"
            v-model="description"
          ></v-textarea>
        </v-col>
        <v-col cols="4">
          <label class="fm-label">Price*</label>
          <v-text-field
            v-model="price"
            placeholder="Price"
            class="fm-input"
            type="number"
            suffix="$"
            :rules="[rules.required, rules.maxPrice]"
          />
        </v-col>
        <v-col cols="4">
          <label class="fm-label">Percent*</label>
          <v-text-field
            v-model="percent"
            placeholder="Percent"
            class="fm-input"
            suffix="%"
            :rules="[rules.percentRange]"
          />
        </v-col>
        <v-col cols="4" v-if="percent">
          <div>
            <label>Date to</label>
            <v-menu
              v-model="percentDate.is_open"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="percentDate.value"
                  :label="percentDate.label"
                  :placeholder="percentDate.placeholder"
                  class="fm-input"
                  append-icon="event"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="percentDate.value"
                @input="percentDate.is_open = false"
              ></v-date-picker>
            </v-menu>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="ml-4">
          <v-row justify="center">
            <v-btn
              class="fm-button-primary"
              @click="submitHandler"
            >Submit
            </v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import FormValidationMixin from '@mixins/FormValidationMixin'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Form',
  mixins: [FormValidationMixin],
  data: () => ({
    title: '',
    description: '',
    photo: null,
    price: null,
    percent: null,
    percentDate: {
      value: null,
      label: 'Start Date',
      placeholder: 'Select Date',
      is_open: false
    },
    loading: true
  }),
  computed: {
    ...mapGetters('products', ['getCurrentProduct'])
  },
  methods: {
    ...mapActions('products', ['getProductsById']),
    submitHandler () {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line
        this.$emit('submit', {
          title: this.title,
          description: this.description,
          price: this.price,
          percent: this.percent,
          percentDate: this.percentDate.value
        })
      }
    },
    fetchProductData () {
      this.title = this.getCurrentProduct.title
      this.percent = this.getCurrentProduct.percent
      this.description = this.getCurrentProduct.description
      this.percentDate.value = this.getCurrentProduct.percentDate
      this.price = this.getCurrentProduct.price
      this.loading = false
    }
  },
  async created () {
    if (this.$route.params.id) {
      await this.getProductsById(this.$route.params.id).then(() => {
        setTimeout(this.fetchProductData, 1000)
      })
    } else {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
