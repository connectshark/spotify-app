<template>
  <div class="category">
    <ImgBox
    v-for="item in list" :key="item.id"
    :url="item.images[0].url"
    :action="action"
    :id="item.id"/>
  </div>
</template>

<script>
import instance from '../lib/request'
import ImgBox from '../components/imgBox'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: ['category'],
  setup (props) {
    const list = ref(null)
    const loading = ref(true)
    const router = useRouter()
    instance.get('/v1/browse/categories/' + props.category + '/playlists', {
      params: {
        category_id: props.category,
        country: 'TW',
        locale: 'zh_TW'
      }
    }).then(res => {
      list.value = res.data.playlists.items
      loading.value = false
    }).catch(() => {
      router.push('/login')
    })
    const action = id => {
      router.push('/playlists/' + id)
    }
    return {
      loading,
      list,
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