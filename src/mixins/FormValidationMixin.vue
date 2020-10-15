
<script>
export default {
  data () {
    return {
      valid: false,
      rules: {
        /* eslint-disable */
        email: v => /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v) || 'Must be valid email. For example: example@example.com',
        phone: v => (/^[+]*[0-9]{1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(v)) || 'Not valid phone number. Example: +X(XXX)-XXX-XXXX',
        numbers: v => (/^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$|^$|^\s$/.test(v) || v === null || v === undefined) || 'Not valid numeric',
        integer: v => (/^\d+$/.test(v) || v === null || v === undefined) || 'Not valid integer',
        required: v => !!v > 0 || 'Field is required',
        minLength: v => v.length > 20 || 'Field length should be more than 20',
        maxLength: v => v.length < 60 || 'Field length should be less than 60',
        maxTextareaLength: v => v.length <= 200 || 'Field length should be less than 200',
        maxPrice: v => v <= 99999999.99 || 'Field length should be less than 99999999.99$',
        percentRange: v => ((v >= 10 && v <=90) || v === '') || 'An iteger between 10 and 90 is required.'
        /* eslint-enable */
      }
    }
  }
}
</script>
