<script setup>
// components
import Header from '@/views/layout/Header.vue';
import Footer from "@/views/layout/Footer.vue";
import Navbar from '@/views/Navbar.vue';

import LoginPage from '@/views/LoginPage.vue';

// stores
import { useLoginStore } from '@/stores/loginStore.js'

let loginStore = useLoginStore();
</script>

<template>
  <v-app v-if="loginStore.isLogin">
    <LoginPage />
  </v-app>
  <v-app v-else fluid ref="app">
    <v-header>
      <Header/>
    </v-header>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="1">
            -- Sub Menus --
          </v-col>
          <v-col>
            <router-view></router-view>
          </v-col>
          <v-col cols="1">
            -- 광고 --
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer>
      <v-container>
        <v-row>
          Footer
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
</style>
