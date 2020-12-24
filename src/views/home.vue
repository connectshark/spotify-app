<template>
  <div class="home">
    <div class="top">
      <h1 class="title">spotify-app</h1>
      <router-link to="/search" class="search">
        <span class="material-icons">search</span>
      </router-link>
    </div>
    <div class="category">
      <span v-if="loading">loading</span>
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
    <Suspense>
      <template #default>
        <User/>
      </template>
      <template #fallback>
        <h2>loading</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import User from '../components/user'
import { useRouter } from 'vue-router'
import ImgBox from '../components/imgBox'
import queryData from '../hook/request'

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
      action
    }
  },
  components: {
    User,
    ImgBox
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.home{
  background-color: $bg;
  .top{
    background-color: #171717;
    position: relative;
    .search{
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 30px;
      height: 30px;
      span{
        font-size: 30px;
        color: #fff;
      }
    }
    .title{
      @include title;
      color: #fff;
    }
  }
  .category{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
  }
}
</style>