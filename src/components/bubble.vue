<template>
  <div class="bubble">
    <router-link :to="'/playlists/' + url">
      <div class="img-place" :style="{ backgroundImage: 'url(' + imgSrc + ')' }">
      </div>
    </router-link>
    <router-link :to="'/playlists/' + url">{{name}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['imgSrc', 'name', 'url']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.bubble{
  .img-place{
    width: 100%;
    padding-bottom: 30vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  a{
    text-align: center;
    @include word;
    color: #fff;
    vertical-align: middle;
  }
}
</style>