import axios from 'axios'

// axios config
const $axios = axios.create({
  baseURL:"http://localhost:3000/api",
  timeout: 3000 // 3초
})

// axios interceptor
// 낭중에 사용할 일이 있을거 같아서 미리 맨들어둠
$axios.interceptors.request.use(
  (config) => {
    console.log(`
      [요청 발신]: ${config}`)
    console.log(Object.keys(config))
    return config
  },
  (error) => {
    console.log(`[요청 에러]`)
    return Promise.reject(error)
  }
)

$axios.interceptors.response.use(
  (res) => {
    console.log(`[응답 수신]: ${res}`)
    return res
  },
  (error) => {
    console.log(`[응답 에러]`)
    return Promise.reject(error)
  }
)


export {$axios};