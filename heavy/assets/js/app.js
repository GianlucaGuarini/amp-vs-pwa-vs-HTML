if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./assets/js/sw.js')
           .then(function() { console.log('Service Worker Registered') })
}

/**
 * Lazy load assets
 */
const lazyAssets = document.querySelectorAll('[data-src]')
const config = {
  rootMargin: '0px 0px'
}

const observer = new IntersectionObserver(onIntersection, config)
lazyAssets.forEach(el => {
  observer.observe(el)
})

function onIntersection(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      const { target } = entry
      load(target)
      observer.unobserve(target)
    }
  })
}

function load(el) {
  el.src = el.dataset.src
}