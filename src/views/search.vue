<template>
  <div class="search">
    <input type="text" :value="r" placeholder="搜尋">
  </div>
  <div class="result">
    <span v-if="loading">loading</span>
    <div class="result" v-else>{{data}}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import queryData from '../hook/request'
export default {
  setup () {
    const r = ref('')
    const { data, loading } = queryData('/v1/search', {
      q: '周杰倫',
      type: 'album,artist',
      market: 'TW'
    })
    return {
      r,
      data,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  
}
</style>