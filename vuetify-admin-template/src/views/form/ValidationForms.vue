<template>
  <v-container fluid>
    <v-card-title>
      Form Validation
    </v-card-title>
    <v-card>
      <v-card-text>
        <validation-observer
          v-slot="{invalid}"
          ref="observer"
        >
          <v-form @submit.prevent="submit">
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
                required: true
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
                required: true
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
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'ValidationForms',
  components: {
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
      customValue: null,
    }
  },
  methods: {
    submit() {
      this.$refs.observer.validate().then(res => {
        console.log('result: ', res);
        if (res) {
          alert('양식 제출')
        }
      })
    },
    clear() {
      this.name = null
      this.phoneNumber = null
      this.email = null
      this.select = null
      this.checkbox = null
    }
  },
}
</script>
