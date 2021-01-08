<template>
  <header class="header">
    <div class="back" @click="back(-1)">
      <span class="material-icons icon">arrow_back</span>
    </div>
    <h1 class="title">{{title}}</h1>
    <router-link to="/search" class="search">
      <span class="material-icons icon">search</span>
    </router-link>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: ['title'],
  setup () {
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }
    return {
      back
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.header{
  background-color: #171717;
  position: relative;
  .icon{
    display: inline;
    font-size: 30px;
    color: #fff;
  }
  .back{
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    color: #fff;
  }
  .search{
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    text-decoration: none;
  }
  .title{
    @include title;
    color: #fff;
  }
}
</style>