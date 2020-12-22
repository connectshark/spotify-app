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

export default {
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token).value
    const router = useRouter()
    if (token === '') {
      router.replace('/login')
    }
  },
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
</style>