import { ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const isLogin = ref(false)
  function login() {
    isLogin.value = true;
  }
  function logout() {
    isLogin.value = false;
  }
  return { isLogin, login, logout}
})