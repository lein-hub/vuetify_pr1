<template>
  <v-container fluid>
    <v-card-title>
      Form Validation
    </v-card-title>
    <v-card-text>
      <validation-observer>
        <v-form>
          <validation-provider
            v-slot="{errors}"
            name="name"
            rules="max:10"
          >
            <v-text-field
              v-model="name"
              label="name"
              :counter="10"
              :error-messages="errors"
            />
          </validation-provider>
          <validation-provider>
            <v-text-field
              v-model="phoneNumber"
              label="PhoneNumber"
            />
          </validation-provider>
          <validation-provider>
            <v-text-field
              v-model="email"
              label="E-Mail"
            />
          </validation-provider>
          <validation-provider>
            <v-select
              label="Select"
              :items="items"
            />
          </validation-provider>
          <validation-provider>
            <v-checkbox
              label="CheckBox"
              value="1"
            />
          </validation-provider>
          <v-btn
            class="mr-4"
            type="submit"
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
extend('max', (value, params) => {
  const limit = params[0]
  if (value && value.length > limit) {
    return `해당 필드는 ${limit}자를 초과할 수 없습니다.`
  }
  return true
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
      name: '',
      phoneNumber: '',
      email: '',
    }
  },
}
</script>
