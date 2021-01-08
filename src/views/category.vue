<template>
  <Header :title="title"/>
  <div class="category">
    <span v-if="loading">loading</span>
    <template v-else>
      <ImgBox
      v-for="item in data.playlists.items" :key="item.id"
      :url="item.images[0].url"
      :action="action"
      :id="item.id"/>
    </template>
  </div>
</template>

<script>
import ImgBox from '../components/imgBox'
import { useRouter } from 'vue-router'
import queryData from '../hook/request'
import Header from '../components/header'

export default {
  props: ['category'],
  setup (props) {
    const router = useRouter()
    const { data, loading } = queryData('/v1/browse/categories/'+ props.category + '/playlists', {
      category_id: props.category,
      country: 'TW',
      locale: 'zh_TW'
    })
    const action = id => {
      router.push('/playlists/' + id)
    }
    return {
      loading,
      data,
      action,
      title: 'category'
    }
  },
  components: {
    ImgBox,
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/rwd.scss';
.category{
  background-color: $bg;
  column-count: 2;
  column-gap: 0;
  @include rwd(medium) {
    column-count: 3;
  }
  @include rwd(desktop) {
    column-count: 4;
  }
}
</style>