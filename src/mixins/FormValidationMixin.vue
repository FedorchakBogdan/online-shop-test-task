
<script>
export default {
  data () {
    return {
      valid: false,
      rules: {
        /* eslint-disable */
        beforePercent: v => /^[0-9][0-9]?\%|^100\%$/.test(v) || 'Not valid value',
        afterPercent: v => v.split('%')[1] === '' || 'Not valid value',
        beforeCommission: v => v.split('$')[0] === '' || 'Not valid value',
        commission: v => isFinite(v.split('$')[1]) || 'Not valid value',
        text: v => /^[a-zA-Z ]*$/.test(v) || 'Not valid value',
        email: v => /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v) || 'Must be valid email. For example: example@example.com',
        url: v => (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(v) || v === '' || v === null || v === undefined) || 'Not valid url',
        phone: v => (/^[+]*[0-9]{1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(v)) || 'Not valid phone number. Example: +X(XXX)-XXX-XXXX',
        numbers: v => (/^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$|^$|^\s$/.test(v) || v === null || v === undefined) || 'Not valid numeric',
        integer: v => (/^\d+$/.test(v) || v === null || v === undefined) || 'Not valid integer',
        max100: v => v >= 0 && v <= 100 || 'The value must be greater than 0 and less than 100',
        max60: v => v >= 1 && v <= 60 || 'Max value is 60 ',
        requiredAndNumber: v => (v !== null && v !== undefined && /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(v)) || 'Field is required and must be valid numeric',
        required: v => !!v > 0 || 'Field is required',
        requiredSelect: v => (v !== null) || 'Field select is required',
        requiredMultiselect: v => (v.length > 0) || 'Field select is required',
        minLength: v => v.length > 20 || 'Field length should be more than 20',
        maxLength: v => v.length < 60 || 'Field length should be less than 60'
        /* eslint-enable */
      }
    }
  }
}
</script>
