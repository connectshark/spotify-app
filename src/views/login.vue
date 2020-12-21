<template>
    <a :href="url" rel="noopener noreferrer">登入按鈕</a>
</template>

<script>
export default {
  setup () {
    const url = process.env.NODE_ENV === 'production' ? 'https%3A%2F%2Fspotify-app.onrender.com%2Fauthorize' : 'http%3A%2F%2Flocalhost%3A8080%2Fauthorize'
    const type = 'token'
    const scope = 'user-read-private%20user-read-email'
    return {
      url: `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_CLIENTID}&response_type=${type}&redirect_uri=${url}&scope=${scope}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>