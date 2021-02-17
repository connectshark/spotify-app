<template>
  <div class="home">
    <Header :title="title"/>
    <div class="loader">
      <div class="loader-inner line-scale-pulse-out-rapid" v-if="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
import queryData from '../hook/request'
import Header from '../components/header'
export default {
  setup () {
    const { data, loading } = queryData('/v1/me/player/recently-played')
    watch(data, value => {
      console.log(value)
    })
    return {
      data,
      loading,
      title: '再聽一次'
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.title{
  @include title;
  color: #fff;
}
</style>