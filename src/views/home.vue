<template>
  <input type="button" value="check" @click="check">
</template>

<script>
import axios from 'axios'

export default {
  setup () {
    const url = new URL(location.href.replace('#', '?'))
    const token = url.searchParams.get('access_token')
    const check = () => {
      axios({
        url: 'https://api.spotify.com/v1/me',
        method: 'Get',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        console.log(res.data)
      }).catch(res => {
        console.log(res)
      })
    }
    return {
      check
    }
  }
}
</script>

<style lang="scss" scoped>
</style>