<template>
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
      action
    }
  },
  components: {
    ImgBox
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.category{
  background-color: $bg;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>