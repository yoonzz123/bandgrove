<script setup>
import Navbar from '../Navbar.vue'
import Logo from '@/assets/images/logo4.svg'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

let menus = [
  {to:'/',      title:'home'},
  {to:'/home2',  title:'home2'},
  {to:'/loginPage', title:'login'},
]

const goHomePage = () => router.push('/');
const goMyPage = () => router.push('/myPage');
const goSettingPage = () => router.push('/settingPage');
const goLogoutPage = () => {
  console.log("로그아웃 기능 빨리 구현해~~")
}

</script>
<template>
  <!-- <v-container fluid> -->
  <v-container>
    <v-row
      align="center"
      style="height:100px;"
    >
      <v-col cols="2">
        <v-img link 
          height="100"
          width="150"
          :src="Logo"
          @click="goHomePage"
          class="cursor-pointer"
        ></v-img>
      </v-col>
      <v-col>
        <v-text-field
          :loading="loading"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search templates"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="onClick"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn 
          icon="mdi-account"
          variant="text"
          @click="goMyPage"
        ></v-btn>
        <v-btn 
          icon="mdi-cog"
          variant="text"
          @click="goSettingPage"
        ></v-btn>
        <v-btn 
          icon="mdi-logout"
          variant="text"
          @click="goLogoutPage"
        ></v-btn>
      </v-col>
    </v-row>
    
    <v-row
      name="main"
    >
      <v-col cols="12">
        <Navbar :menus="menus"/>
      </v-col>
    </v-row>
    
    <v-divider 
    ></v-divider>
    
     
  </v-container>
  
</template>
<style scoped>
</style>