
document.body.innerHTML = '<h1>Hello There</h1>'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./sw.js')
           .then(function() { console.log('Service Worker Registered') })
}
