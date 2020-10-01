<template>
  <v-form
    class="unit-form"
    v-model="valid"
    ref="form"
    lazy-validation
  >
    <v-row justify="space-around">
      <v-col cols="4">
        <label class="fm-label">Title</label>
        <v-text-field
          v-model="title"
          placeholder="Name"
          class="fm-input"
          :rules="[rules.required, rules.minLength, rules.maxLength]"
        />
      </v-col>
      <v-col cols="4">
        <label class="fm-label">Photo</label>
        <v-file-input
          label="File input"
          filled
          class="fm-input uploader-input"
          v-model="photo"
          :rules="[rules.required]"
        ></v-file-input>
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
</template>

<script>
import FormValidationMixin from '@mixins/FormValidationMixin'

export default {
  name: 'Form',
  mixins: [FormValidationMixin],
  data: () => ({
    title: '',
    photo: null
  }),
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    submitHandler () {
      if (this.$refs.form.validate()) {
        this.$emit('change', this.typeName)
      }
    }
  },
  created () {
    this.typeName = this.name
  }
}
</script>

<style scoped lang="scss">

</style>
