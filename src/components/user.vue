<template>
  <div class="loading" v-if="loading">loading.....</div>
  <template v-else>
    <div class="user">
      <figure>
        <img :src="data.images[0].url" :alt="data.id">
      </figure>
    </div>
  </template>
</template>

<script>
import queryData from '../hook/request'
export default {
  setup () {
    const { data, loading} = queryData('/v1/me')
    return {
      data,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
</style>