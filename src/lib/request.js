import axios from 'axios'
import { computed } from 'vue'
import store from '../store'

export function getUrlData (key) {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}


const instance = axios.create({
  baseURL: 'https://api.spotify.com'
})

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = 'Bearer ' + checkToken()
    return config
  }
)

export default instance

function checkToken () {
  return computed(() => store.state.token).value
}