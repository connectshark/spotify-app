import axios from 'axios'

export function getUrlData (key) {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: 'Bearer ' + token
  }
})