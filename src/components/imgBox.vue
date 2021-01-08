<template>
  <figure class="box" @click="clickHandler">
    <img :src="url" :alt="name" :style="{filter: `blur(${blurRate}px)`}" @load="blurHandler">
    <figcaption class="img-title" v-if="name">{{name}}</figcaption>
  </figure>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['url', 'name', 'id', 'action'],
  setup (props) {
    const clickHandler = () => {
      props.action(props.id)
    }
    const blurRate = ref(2)
    const blurHandler = () => {
      blurRate.value = 0
    }
    return {
      clickHandler,
      blurHandler,
      blurRate
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.box{
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
  .img-title{
    position: absolute;
    @include title;
    color: #fff;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
  }
  img{
    width: 100%;
    vertical-align: middle;
    transition: transform .3s;
  }
}
</style>