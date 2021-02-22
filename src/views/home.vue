<template>
  <div class="home">
    <Header
      :title="'首頁'"
      :needBack="false"
    />
    <div class="content">
      <swiperSection
        :list="featureList"
        :loading="featureLoading"
        :title="featureTitle"
      />
      <swiperSection
        :list="recentList"
        :loading="recenterLoading"
        :title="recentTitle"
      />
      <swiperSection
        :list="releaseList"
        :loading="releaseLoading"
        :title="releaseTitle"
      />
      <router-link to="/menu" class="btn">瀏覽</router-link>
    </div>
  </div>
</template>

<script>
import swiperSection from '../components/swiperSection'
import Header from '../components/header'
import { getFeatureItem, getNewReleaseList, getRecentList } from '../hook/request'

export default {
  setup () {
    const { featureList, loading: featureLoading, title: featureTitle } = getFeatureItem()
    const { recentList, loading: recenterLoading, title: recentTitle }  = getRecentList()
    const { releaseList, loading: releaseLoading, title: releaseTitle } = getNewReleaseList()
    return {
      featureList,
      featureLoading,
      featureTitle,
      recentList,
      recenterLoading,
      recentTitle,
      releaseList,
      releaseLoading,
      releaseTitle
    }
  },
  components: {
    Header,
    swiperSection
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.content{
  h2{
    color: #fff;
    @include title;
    text-align: left;
  }
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .btn{
    @include title;
    display: inline-block;
    vertical-align: middle;
    background-color: #1CB854;
    color: #fff;
    text-decoration: none;
    padding:5px 20px;
    border-radius: 30px;
  }
}
</style>