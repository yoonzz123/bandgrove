import { ref, computed} from 'vue'
import { defineStore } from 'pinia'
const env = import.meta.env;

export const useOAuthStore = defineStore('oauthNaver', () => {
  const naverClientId = ref(env.VITE_N_CLIENT_ID)
  const naverClientSecret = ref(env.VITE_N_SECRET)
  const naverRedirectURL = ref(env.VITE_N_REDIRECT)
  const naverState = ref(env.VITE_N_STATE)

  function getOAuthNaverURl(){
    return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId.value}&redirect_uri=${encodeURI(naverRedirectURL.value)}&state=${naverState.value}`
  }
  
  const googleClientId = ref(env.VITE_G_CLIENT_ID)
  const googleRedirectURL = ref([env.VITE_G_REDIRECT])
  const googleScopeURL = ref(env.VITE_G_SCOPEUTL)

  function getOAuthGoogleURl(){
    return `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${googleClientId.value}&redirect_uri=${googleRedirectURL.value}&scope=${googleScopeURL.value}`
  }
  return { getOAuthNaverURl, getOAuthGoogleURl}
})