import { ref, watch } from 'vue'
import queryData from '../hook/request'


const connect = {
  getFeatureItem () {
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
          id: item.id,
          type: 'playlists'
        }
      })
    })
    return {
      loading,
      title,
      featureList
    }
  },

  getRecentList () {
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
        return {
          imgUrl: item.track.album.images[0].url,
          name: item.track.name,
          id: item.track.album.id,
          type: 'albums'
        }
      })
    })
    return {
      loading,
      title,
      recentList
    }
  },

  getNewReleaseList () {
    const { data } = queryData('/v1/browse/new-releases', {
      country: 'TW'
    })
    const loading = ref(true)
    const title = ref('新發佈')
    const releaseList = ref([])
    watch(data, value => {
      loading.value = false
      releaseList.value = value.albums.items.map(item => {
        return {
          imgUrl: item.images[0].url,
          name: item.name,
          id: item.id,
          type: 'albums'
        }
      })
    })
  
    return {
      loading,
      title,
      releaseList
    }
  }
}

export default connect