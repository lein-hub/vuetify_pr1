<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="480">
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10">
              로그인
            </div>
            <validation-observer
              v-slot="{invalid}"
              ref="observer"
            >
              <v-form @submit.prevent="login">
                <validation-provider
                  v-slot="{errors}"
                  :rules="{
                    required: true,
                    email: true,
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
                    required: true,
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
                <v-btn
                  color="primary mt-6"
                  :disabled="invalid"
                  block
                  x-large
                  rounded
                  type="submitf"
                >
                  로그인
                </v-btn>
                <div class="mt-5">
                  <router-link
                    class="text-decoration-none"
                    to="/"
                  >
                    홈
                  </router-link> |
                  <router-link
                    class="text-decoration-none"
                    to="/authentication/sign-up"
                  >
                    회원가입
                  </router-link>
                </div>
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
    }
  },
  methods: {
    login() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          alert('로그인 완료')
        }
      })
    }
  },
}
</script>

<style>

</style>
