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
      :slides-per-view="3.5"
      :space-between="25"
      :wrapperTag="'ul'"
    >
      <swiper-slide
        v-for="item in list"
        :key="item.id"
        :tag="'li'"
      >
        <bubble
          :imgSrc="item.imgUrl"
          :name="item.name"
          :id="item.id"
          :type="item.type"
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
  props: ['title', 'list', 'loading'],
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