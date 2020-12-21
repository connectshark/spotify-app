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
import User from '../components/user'

export default {
  setup () {
    return {
    }
  },
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
</style>