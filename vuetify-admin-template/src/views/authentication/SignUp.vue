<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            width="120"
            class="mx-auto mb-6"
            :src="require('@/assets/logo.png')"
          />
        </router-link>
        <v-card width="480">
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10">
              회원가입
            </div>
            <validation-observer
              v-slot="{invalid}"
              ref="observer"
            >
              <v-form @submit.prevent="signUp">
                <validation-provider
                  v-slot="{errors}"
                  :rules="{
                    email: true,
                    required: true,
                  }"
                  name="이메일"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  :rules="{
                    required: true
                  }"
                  name="비밀번호"
                >
                  <v-text-field
                    v-model="password1"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                    type="password"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{errors}"
                  :rules="{
                    required:true,
                    confirmed: '비밀번호'
                  }"
                  name="비밀번호 확인"
                >
                  <v-text-field
                    v-model="password2"
                    label="비밀번호 확인"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                    type="password"
                  />
                </validation-provider>
                <v-btn
                  color="primary mt-6"
                  block
                  x-large
                  rounded
                  type="submit"
                  :disabled="invalid"
                >
                  가입
                </v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password1: '',
      password2: '',
    }
  },
  methods: {
    signUp() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          alert('가입 완료')
        }
      })
    }
  },
}
</script>

<style>

</style>
