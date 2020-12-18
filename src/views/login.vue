<template>
    <a :href="url" rel="noopener noreferrer">登入按鈕</a>
</template>

<script>
export default {
  setup () {
    return {
      url: `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_CLIENTID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F%23%2F&scope=playlist-read-private`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>