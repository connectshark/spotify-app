<template>
  <div class="loading" v-if="loading">loading.....</div>
  <template v-else>
    <div class="user">
      <p class="text">感謝</p>
      <figure class="user-icon">
        <img :src="data.images[0].url" :alt="data.id">
        <figcaption>{{data.display_name}}</figcaption>
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
@import '../assets/scss/base.scss';
.user{
  padding: 20px 0;
  .text{
    color: #fff;
    @include title;
  }
  .user-icon{
    width: 60px;
    margin: auto;
    figcaption{
      color: #fff;
      @include word;
    }
    img{
      border-radius: 50%;
      width: 100%;
    }
  }
}
</style>