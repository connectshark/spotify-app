import store from '@/store'
import axios from 'axios'
import { computed } from 'vue'

export function getUrlData (key) {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

export default function query (keyWord) {
  const token = computed(() => store.state.token).value
  return new Promise((resolve) => {
    axios({
      method: 'get',
      baseURL: 'https://api.spotify.com',
      url: '/v1/search',
      headers: {
        Authorization: 'Bearer ' + token
      },
      params: {
        q: keyWord,
        type: 'album,artist',
        market: 'TW'
      }
    }).then(res => resolve(res.data))
  })
}