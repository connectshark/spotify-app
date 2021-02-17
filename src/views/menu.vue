<template>
  <div class="home">
    <Header :title="title"/>
    <div class="category">
      <div v-if="loading" class="loader">
        <div class="loader-inner line-scale-pulse-out">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <template v-else>
        <ImgBox
        v-for="item in data.categories.items"
        :key="item.id"
        :id="item.id"
        :action="action"
        :url="item.icons[0].url"
        :name="item.name"/>
      </template>
    </div>
    <User/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import User from '../components/user'
import { useRouter } from 'vue-router'
import ImgBox from '../components/imgBox'
import queryData from '../hook/request'
import Header from '../components/header'
export default {
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token).value
    const router = useRouter()
    if (token === '') {
      router.replace('/login')
    }
    const { data, loading } = queryData('/v1/browse/categories', {
      country: 'TW',
      locale: 'zh_TW'
    })
    const action = id => {
      router.push('/category/' + id)
    }
    return {
      loading,
      data,
      action,
      title: 'spotify-app'
    }
  },
  components: {
    User,
    ImgBox,
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/rwd.scss';
.home{
  background-color: $bg;
  .category{
    column-count: 2;
    column-gap: 0;
    @include rwd(medium) {
      column-count: 3;
    }
    @include rwd(desktop) {
      column-count: 4;
    }
  }
}
</style>