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
import queryData from '../hook/request'

export default {
  props: ['listId'],
  setup (props) {
    const { data, loading } = queryData('/v1/playlists/' + props.listId, {
      playlist_id: props.listId
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