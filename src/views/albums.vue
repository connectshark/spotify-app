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
      <div class="hero-img" :style="{ backgroundImage: 'url(' + data.images[0].url + ')' }">
        <h2>{{data.name}}</h2>
      </div>
    </div>
    <!-- <template v-else>
      <div class="title">
        <figure class="hero-image">
          <img :src="data.images[0].url" :alt="data.name">
        </figure>
        <h1>{{data.name}}</h1>
        <h2>{{data.description}}</h2>
        <p class="info">
          <span class="owner">{{ data.owner.display_name }}</span>
          <span class="follower">{{ data.followers.total.toLocaleString() }}人按讚</span>
          <span class="total-songs">{{ data.tracks.total }}首歌</span>
        </p>
        <a :href="data.external_urls.spotify"
          class="btn"
          target="_blank"
          rel="noopener noreferrer">Listen on Spotify</a>
      </div>
      <ul class="list">
        <li v-for="item in data.tracks.items"
          :key="item.track.external_ids.isrc"
          class="song">
          <figure class="song-img">
            <img :src="item.track.album.images[0].url" :alt="item.track.name">
          </figure>
          <div class="song-info">
            <h4>{{item.track.name}}</h4>
            <h5>{{item.track.artists[0].name}}</h5>
          </div>
          <a :href="item.track.external_urls.spotify"
            target="_blank"
            rel="noopener noreferrer"
            class="btn">
            <span class="material-icons icon">play_circle_outline</span>
          </a>
        </li>
      </ul>
    </template> -->
  </div>
</template>

<script>
import queryData from '../hook/request'
import Header from '../components/header'
import { watch } from 'vue'

export default {
  props: ['albumId'],
  setup (props) {
    const { data, loading } = queryData('/v1/albums/' + props.albumId)
    watch(data, value => {
      console.log(value)
    })
    return {
      loading,
      data,
      title: 'album'
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.content{
  h2{
    @include title;
    font-size: 40px;
    color: #fff;
  }
  .hero-img{
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 20% 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: brightness(1);
    transition: filter .3s;
    &:hover{
      filter: brightness(.3);
    }
  }
}
</style>