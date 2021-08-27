import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider} from 'vee-validate'
import {max, required, numeric, digits, email, confirmed} from 'vee-validate/dist/rules'

// extend('max', (value, params) => {
//   const limit = params[0]
//   if (value && value.length > limit) {
//     return `해당 필드는 ${limit}자를 초과할 수 없습니다.`
//   }
//   return true
// })

extend('max', {
  ...max,
  message: '{_field_}필드는 {length}자를 초과할 수 없습니다.'
})

extend('required', {
  ...required,
  message: '{_field_} 필드는 필수값입니다.'
})
extend('numeric', {
  ...numeric,
  message: '{_field_} 필드는 숫자로만 구성되어야 합니다.'
})
extend('digits', {
  ...digits,
  message: '{_field_} 필드는 {length}자리여야 합니다.'
})

extend('email', {
  ...email,
  message: '잘못 입력된 이메일 주소입니다.'
})

extend('confirmed', {
  ...confirmed,
  message: '비밀번호가 일치하지 않습니다.'
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
