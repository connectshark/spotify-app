<template>
  <h2>{{token}}</h2>
</template>

<script>
export default {
  setup () {
    const url = new URL(location.href.replace('#', '?'))
    const token = url.searchParams.get('access_token')
    return {
      token
    }
  }
}
</script>

<style lang="scss" scoped>
</style>