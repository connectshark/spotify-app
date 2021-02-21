import axios from 'axios'
import store from '../store'
import { computed, ref, watch } from 'vue'
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

export function getFeatureItem () {
  const { data } = queryData('v1/browse/featured-playlists', {
    country: 'TW',
    locale: 'zh_TW'
  })
  const loading = ref(true)
  const title = ref('')
  const featureList = ref([])
  watch(data, () => {
    loading.value = false
    title.value = data.value.message
    featureList.value = data.value.playlists.items.map(item => {
      return {
        imgUrl: item.images[0].url,
        name: item.name,
        id: item.id
      }
    })
  })
  return {
    loading,
    title,
    featureList
  }
}

export function getRecentList () {
  const { data } = queryData('/v1/me/player/recently-played', {
    country: 'TW',
    locale: 'zh_TW'
  })
  const loading = ref(true)
  const title = ref('近期播放')
  const recentList = ref([])
  watch(data, () => {
    loading.value = false
    recentList.value = data.value.items.map(item => {
      console.log(item)
      return {
        imgUrl: item.track.album.images[0].url,
        name: item.track.name,
        id: item.track.album.id
      }
    })
  })
  return {
    loading,
    title,
    recentList
  }
}