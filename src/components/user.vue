<template>
  <img :src="imgSrc" :alt="name">
  <h2><a :href="link" target="_blank" rel="noopener noreferrer">{{name}}</a></h2>
  <h3>國籍: {{country}}</h3>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token)
    return new Promise((resolve) => {
      axios({
        url: 'https://api.spotify.com/v1/me',
        method: 'Get',
        headers: {
          Authorization: 'Bearer ' + token.value
        }
      }).then(res => {
        const info = res.data
        resolve({
          imgSrc: info.images[0].url,
          name: info.display_name,
          id: info.id,
          level: info.product,
          country: info.country,
          link: info.external_urls.spotify
        })
      }).catch(res => {
        console.log(res)
      })
    })
  }
})
</script>