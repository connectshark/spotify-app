<template>
  <div class="search-wrapper">
    <div class="search">
      <input type="text" v-model="r" placeholder="搜尋" v-debounce:500ms="validate" class="bar">
    </div>
    <span v-if="loading">loading</span>
    <div class="result-group" v-else>
      <div class="albums">
        <h3>Albums</h3>
        <router-link class="album-item" v-for="item in data.albums.items" :key="item.id" :to="'/albums/' + item.id">
          <div class="img-place" :style="{ backgroundImage: 'url(' + item.images[0].url + ')' }"></div>
          <p class="name">{{item.name}}</p>
        </router-link>
      </div>
      <div class="artists">
        <h3>Artists</h3>
        <router-link class="artists-item" v-for="item in data.artists.items" :key="item.id" :to="'/artists/' + item.id">
          <div class="img-place" :style="{ backgroundImage: 'url(' + item.images[0].url + ')' }"></div>
          <p class="name">{{item.name}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import query from '@/lib/request'

export default {
  setup () {
    const r = ref('')
    const data = reactive({
      artists: {},
      albums: {}
    })
    const loading = ref(true)


    const validate = () => {
      query(r.value)
        .then(res => {
          loading.value = false
          data.artists = res.artists
          data.albums = res.albums
        })
    }
    return {
      r,
      data,
      loading,
      validate
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper{
  a{
    color: #fff;
  }
  color: #fff;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  .search{
    padding: 30px 0;
    .bar{
      width: 70%;
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 1.9;
      border-radius: 15px;
      outline: none;
    }
  }
  .result-group{
    width: 80%;
    margin: auto;
    max-width: 1200px;
    .albums, .artists{
      .album-item, .artists-item{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 5px;
        .img-place{
          width: 50px;
          height: 50px;
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>