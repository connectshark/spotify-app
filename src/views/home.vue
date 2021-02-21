<template>
  <div class="home">
    <Header :title="'首頁'"/>
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
      <h2>{{data.message}}</h2>
      <Swiper
        :slides-per-view="3"
        :space-between="25"
      >
      <swiper-slide
        v-for="item in data.playlists.items"
        :key="item.snapshot_id"
      >
        <bubble
          :imgSrc="item.images[0].url"
          :name="item.name"
          :url="item.id"
        />
      </swiper-slide>
    </Swiper>
    <router-link to="/menu">瀏覽</router-link>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
import Header from '../components/header'
import queryData from '../hook/request'
import bubble from '../components/bubble'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

export default {
  setup () {
    const { data, loading } = queryData('v1/browse/featured-playlists', {
      country: 'TW',
      locale: 'zh_TW'
    })
    watch(data, value => {
      console.log(value)
    })
    return {
      data,
      loading
    }
  },
  components: {
    Header,
    bubble,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.content{
  h2{
    color: #fff;
    @include title;
    text-align: left;
  }
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>