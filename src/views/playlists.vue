<template>
  <Header :title="title"/>
  <div class="playlists">
    <p v-if="loading">loading</p>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import queryData from '../hook/request'
import Header from '../components/header'

export default {
  props: ['listId'],
  setup (props) {
    const { data, loading } = queryData('/v1/playlists/' + props.listId, {
      playlist_id: props.listId
    })

    return {
      loading,
      data,
      title: 'playList'
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/rwd.scss';
img{
  width: 100%;
  vertical-align: middle;
}
.title{
  color: #fff;
  padding: 40px 20px;
  .hero-image{
    width: 50%;
    margin: auto;
  }
  
  h1{
    @include title;
    font-size: 40px;
  }
  h2{
    @include word;
  }
  .btn{
    display: inline-block;
    background-color: #1CB854;
    color: #fff;
    text-decoration: none;
    padding:5px 20px;
    border-radius: 30px;
    @include word;
  }
  .info{
    line-height: 2;
    span{
      display: inline-block;
      margin: 0 10px;
    }
  }
}
.list{
  color: #fff;
  .song{
    width: 90%;
    margin: 0 auto 5px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    .song-img{
      width: 15vw;
      height: 15vw;
      flex-shrink: 0;
    }
    .song-info{
      margin: 0 20px;
      text-align: left;
      min-width: 0;
      h4{
        white-space: nowrap;
        font-size: 18px;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h5{
        font-size: 16px;
        line-height: 1;
        color: #aaa;
      }
    }
    .btn{
      margin-left: auto;
      flex-shrink: 0;
      .icon{
        color: #1CB854;
        font-size: 40px;
        vertical-align: middle;
      }
    }
  }
}
</style>