<template>
  <Header :title="title"/>
  <div class="playlists">
    <div class="loader" v-if="loading">
      <div class="loader-inner line-scale-pulse-out-rapid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="content" v-else>
      <div class="hero-img">
        <img :src="data.images[0].url" alt="albums" @dragstart.prevent>
      </div>
      <ul class="tracks">
        <li class="track-item" v-for="track in data.tracks.items" :key="track.id">
          <p>{{track.name}}</p>
          <a :href="track.external_urls.spotify" target="_blank" rel="noopener noreferrer">play</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import queryData from '../hook/request'
import Header from '../components/header'
import { ref, watch } from 'vue'

export default {
  props: ['albumId'],
  setup (props) {
    const { data, loading } = queryData('/v1/albums/' + props.albumId)
    const title = ref('')
    watch(data, value => {
      console.log(value)
      title.value = value.name
    })
    return {
      loading,
      data,
      title
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.playlists{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  .content{
    padding: 20px 0;
    h2{
      @include title;
      font-size: 40px;
      color: #fff;
    }
    .hero-img{
      width: 60%;
      border-radius: 50%;
      margin: auto;
      overflow: hidden;
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
    .tracks{
      width: 80%;
      margin: auto;
      .track-item{
        color: #fff;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #292929;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 10px;
        a{
          color: #fff;
        }
      }
    }
  }
}

</style>