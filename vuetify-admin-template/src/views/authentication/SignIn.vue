<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="480">
          <v-card-text class="text-center px-12 py-10">
            <div class="text-h4 font-weight-black mb-10">
              로그인
            </div>
            <v-text-field
              v-model="email"
              label="이메일"
              clearable
              prepend-icon="mdi-email"
            />
            <v-text-field
              v-model="password1"
              label="비밀번호"
              clearable
              prepend-icon="mdi-lock-outline"
            />
            <v-btn
              color="primary mt-6"
              block
              x-large
              rounded
            >
              로그인
            </v-btn>
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
}
</script>

<style>

</style>
