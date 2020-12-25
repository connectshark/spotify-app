<template>
  <div class="search">
    <input type="text" :value="r" placeholder="搜尋">
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const r = ref('')
    return {
      r
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  
}
</style>