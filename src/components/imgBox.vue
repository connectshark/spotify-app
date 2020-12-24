<template>
  <figure class="box" @click="clickHandler">
    <img :src="url" :alt="name">
    <figcaption class="img-title" v-if="name">{{name}}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['url', 'name', 'id', 'action'],
  setup (props) {
    const clickHandler = () => {
      props.action(props.id)
    }
    return {
      clickHandler
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/rwd.scss';
.box{
  width: 50%;
  margin: auto;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
  @include rwd(desktop) {
    width: 100%;
    max-width: 240px;
    margin: unset;
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