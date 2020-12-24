<template>
  <input type="text" :value="r" placeholder="搜尋">
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
</style>