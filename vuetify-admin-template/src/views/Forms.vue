<template>
  <v-container fluid>
    <v-card-title>
      Form Validation
    </v-card-title>
    <v-card-text>
      <validation-observer v-slot="{invalid}">
        {{ invalid }}
        <v-form>
          <validation-provider
            v-slot="{errors}"
            name="Name"
            rules="max:10"
          >
            <v-text-field
              v-model="name"
              label="Name"
              :counter="10"
              :error-messages="errors"
            />
          </validation-provider>
          <validation-provider
            v-slot="{errors}"
            name="PhoneNumber"
            :rules="{
              required: true,
              numeric: true,
              digits: 11
            }"
          >
            <v-text-field
              v-model="phoneNumber"
              label="PhoneNumber"
              :error-messages="errors"
              :counter="11"
            />
          </validation-provider>
          <validation-provider
            v-slot="{errors}"
            name="E-Mail"
            :rules="{
              email: true,
              required: true,
            }"
          >
            <v-text-field
              v-model="email"
              label="E-Mail"
              :error-messages="errors"
            />
          </validation-provider>
          <validation-provider
            v-slot="{errors}"
            name="Select"
            :rules="{
              required
            }"
          >
            <v-select
              v-model="select"
              :error-messages="errors"
              label="Select"
              :items="items"
            />
          </validation-provider>
          <validation-provider
            v-slot="{errors}"
            name="CheckBox"
            :rules="{
              required
            }"
          >
            <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              label="CheckBox"
              value="1"
            />
          </validation-provider>
          <v-btn
            class="mr-4"
            type="submit"
            color="primary"
            :disabled="invalid"
          >
            submit
          </v-btn>
          <v-btn color="success">
            clear
          </v-btn>
        </v-form>
      </validation-observer>
    </v-card-text>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider} from 'vee-validate'
import {max, required, numeric, digits, email} from 'vee-validate/dist/rules'

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

export default {
  name: 'Forms',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      items: [
        {text: '아이템1',  value: 1},
        {text: '아이템2',  value: 2},
        {text: '아이템3',  value: 3}
      ],
      name: null,
      phoneNumber: null,
      email: null,
      select: null,
      checkbox: null,
    }
  },
}
</script>
