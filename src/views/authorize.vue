<template>
  <h2>跳轉中</h2>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const url = new URL(location.href.replace('#', '?'))
    const token = url.searchParams.get('access_token')
    const store = useStore()
    store.dispatch('init', token)
    const router = useRouter()
    router.replace('/home')
  }
}
</script>

<style lang="scss" scoped>
</style>