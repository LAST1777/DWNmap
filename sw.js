const CACHE_PREFIX = 'dwnmap-app-'
const CACHE_NAME = CACHE_PREFIX + 'mvl1yqv5'
const ROOT = new URL('./', self.registration.scope)
const INDEX_URL = new URL('index.html', ROOT).href

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    const response = await fetch(INDEX_URL, { cache: 'reload' })
    if (!response.ok) throw new Error('Application shell could not be downloaded')
    await cache.put(INDEX_URL, response.clone())
    const html = await response.text()
    const assets = new Set([new URL('manifest.webmanifest', ROOT).href, new URL('icons/compass.svg', ROOT).href])
    for (const match of html.matchAll(/(?:src|href)=\"([^\"]+)\"/g)) {
      const url = new URL(match[1], INDEX_URL)
      if (url.origin === ROOT.origin) assets.add(url.href)
    }
    await Promise.all([...assets].map(async url => {
      const asset = await fetch(url, { cache: 'reload' })
      if (!asset.ok) throw new Error('Application asset could not be downloaded: ' + url)
      await cache.put(url, asset)
    }))
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys()
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME).map(name => caches.delete(name)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== ROOT.origin) return
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request)
        const cache = await caches.open(CACHE_NAME)
        await cache.put(INDEX_URL, response.clone())
        return response
      } catch {
        return (await caches.match(INDEX_URL)) || Response.error()
      }
    })())
    return
  }
  event.respondWith((async () => {
    const cached = await caches.match(request)
    const update = fetch(request).then(async response => {
      if (response.ok) { const cache = await caches.open(CACHE_NAME); await cache.put(request, response.clone()) }
      return response
    }).catch(() => undefined)
    if (cached) { event.waitUntil(update); return cached }
    return (await update) || Response.error()
  })())
})
