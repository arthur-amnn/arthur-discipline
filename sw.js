const CACHE='discipline-v2';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  // app shell : cache-first, fallback réseau
  if(url.origin===self.location.origin){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{caches.open(CACHE).then(c=>c.put(e.request,resp.clone()));return resp;}).catch(()=>caches.match('./index.html'))));
    return;
  }
  // polices CDN : réseau d'abord, fallback cache
  if(url.hostname.includes('fonts.g')){
    e.respondWith(fetch(e.request).then(resp=>{caches.open(CACHE).then(c=>c.put(e.request,resp.clone()));return resp;}).catch(()=>caches.match(e.request)));
  }
});
