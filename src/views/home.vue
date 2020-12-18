<template>
  <input type="button" value="check" @click="check">
  <h2>{{data}}</h2>
</template>

<script>
import { ref } from 'vue'
import { getUrlData } from '../lib/request'

export default {
  setup () {
    const data = ref('')
    const check = () => {
      const code = getUrlData('code')
      if (code) {
        fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${process.env.VUE_APP_CLIENTSECRET}`
          }
        }).then(res => res.json())
          .then(data => console.log(data))
      }
    }
    return {
      data,
      check
    }
  }
}
</script>

<style lang="scss" scoped>
</style>