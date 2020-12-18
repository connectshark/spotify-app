export function getUrlData (key) {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}
