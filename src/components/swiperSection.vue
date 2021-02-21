<template>
  <div class="loader" v-if="loading">
    <div class="loader-inner line-scale-pulse-out-rapid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <section class="section" v-else>
    <h2>{{title}}</h2>
    <Swiper
      :slides-per-view="3"
      :space-between="25"
    >
      <swiper-slide
        v-for="item in data.items"
        :key="item.track.id"
      >
        <bubble
          :imgSrc="item.track.album.images[0].url"
          :name="item.track.name"
          :url="item.track.external_urls.spotify"
        />
      </swiper-slide>
    </Swiper>
  </section>
</template>

<script>
import bubble from './bubble'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

export default {
  props: ['title'],
  setup () {
  },
  components: {
    Swiper,
    SwiperSlide,
    bubble
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.section{
  h2{
    color: #fff;
    @include title;
    text-align: left;
  }
}
</style>