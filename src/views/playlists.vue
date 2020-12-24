<template>
  <div class="playlists">
    <p v-if="loading">loading</p>
    <template v-else>
      <div class="title">
        <h1>{{data.name}}</h1>
        <h2>{{data.description}}</h2>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'
import instance from '../lib/request'
import { useRouter } from 'vue-router'
export default {
  props: ['listId'],
  setup (props) {
    const data = ref(null)
    const loading = ref(true)
    const router = useRouter()
    instance.get('/v1/playlists/' + props.listId, {
      params: {
        playlist_id: props.listId
      }
    }).then(res => {
      data.value = res.data
      console.log(res.data)
      loading.value = false
    }).catch(() => {
      router.push('/login')
    })
    return {
      loading,
      data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>