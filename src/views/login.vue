<template>
  <div class="container">
    <a :href="url" rel="noopener noreferrer" class="login">{{btnName}}</a>
  </div>
</template>

<script>
export default {
  setup () {
    const url = process.env.NODE_ENV === 'production' ? 'https://spotify-app.onrender.com/authorize' : 'http://localhost:8080/authorize'
    const type = 'token'
    const scope = 'user-read-email&user-read-recently-played'
    return {
      url: `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_CLIENTID}&response_type=${type}&redirect_uri=${url}&scope=${scope}`,
      btnName: '登入spotify'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.container{
  height: 100vh;
  &::before{
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .login{
    @include title;
    display: inline-block;
    vertical-align: middle;
    background-color: #1CB854;
    color: #fff;
    text-decoration: none;
    padding:5px 20px;
    border-radius: 30px;
  }
}
</style>