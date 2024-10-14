<script setup>
import logo4 from '@/assets/images/logo4.svg'
import logo5 from '@/assets/images/logo5.svg'
import {$axios} from '@/plugins/axios.js'
import { useOAuthStore } from '@/stores/oauthStore.js'

let authStore = useOAuthStore();

</script>

<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <v-img 
          width="1000"
          :src="logo5"
        ></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-card-item>
            <v-card-title>밴드 그루에 로그인해주세요.</v-card-title>

            <v-card-subtitle>밴드 그루는 모든 뮤지션 활동을 응원합니다! ^.^</v-card-subtitle>
          </v-card-item>

          <v-card-text>
              여긴 뭐하는 곳인데 로그인도 안되냐
          </v-card-text>
          <v-card-actions class="pt-10 pr-10 pb-0 pl-10">
            <v-btn
              class="text-none mb-4"
              color="blue-grey-lighten-4"
              size="large"
              variant="flat"
              block
              :href="authStore.getOAuthGoogleURl()"
            >
              <v-icon icon="mdi-google-plus"/>
              구글 로그인
            </v-btn>
          </v-card-actions>
          <v-card-actions class="pr-10 pb-0 pl-10">
            <v-btn
              class="text-none mb-4"
              color="indigo-darken-3"
              size="large"
              variant="flat"
              block
              @click="loginToFaceBook"
            >
              <v-icon icon="mdi-facebook"/>
              페북 로그인
            </v-btn>
          </v-card-actions>
          <v-card-actions class="pr-10 pb-0 pl-10">
            <v-btn
              class="text-none mb-4"
              color="light-green-darken-1"
              size="large"
              variant="flat"
              block
              :href="authStore.getOAuthNaverURl()"
            >
              <v-icon icon="mdi-alpha-n-box"/>
              네이버 로그인
            </v-btn>
          </v-card-actions>
          <v-card-actions class="pr-10 pb-0 pl-10">
            <v-btn
              class="text-none mb-4"
              color="yellow-accent-3"
              size="large"
              variant="flat"
              block
              @click="loginToKakao"
            >
              <v-icon icon="mdi-chat" />
              카카오 로그인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
      
  </v-container>
</template>
<style scoped>
</style>