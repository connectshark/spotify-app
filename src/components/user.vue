<template>
  <img :src="imgSrc" :alt="name">
  <h2><a :href="link" target="_blank" rel="noopener noreferrer">{{name}}</a></h2>
  <h3>國籍: {{country}}</h3>
</template>

<script>
import { defineComponent } from 'vue'
import instance from '../lib/request'

export default defineComponent({
  setup () {
    return new Promise((resolve) => {
      instance.get('/v1/me')
        .then(res => {
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