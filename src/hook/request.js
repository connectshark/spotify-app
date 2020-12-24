import axios from 'axios'
import store from '../store'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default function queryData (url, params) {
  const data = ref(undefined)
  const loading = ref(true)
  const router = useRouter()
  axios({
    method: 'GET',
    baseURL: 'https://api.spotify.com',
    url: url,
    headers: {
      Authorization: 'Bearer ' + checkToken()
    },
    params: params
  }).then(res => {
    data.value = res.data
    loading.value = false
  }).catch(() => {
    router.push('/login')
  })
  return {
    data,
    loading
  }
}

function checkToken () {
  return computed(() => store.state.token).value
}