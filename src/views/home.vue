<template>
  <Suspense>
    <template #default>
      <User/>
    </template>
    <template #fallback>
      <h2>loading</h2>
    </template>
  </Suspense>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import User from '../components/user'
import { useRouter } from 'vue-router'
import instance from '../lib/request'

export default {
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token).value
    const router = useRouter()
    if (token === '') {
      router.replace('/login')
    }
    instance.get('/v1/browse/categories', {
      params: {
        country: 'TW',
        locale: 'zh_TW'
      }
    }).then(res => console.log(res))
  },
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
</style>