# amp-vs-pwa-vs-HTML
Simple Benchmark to check the speed of 3 different website types

## Results
All the benchmarks were run with the Lighthouse via Chrome audit tab

<img src='audit-setup.png'/>

### AMP

<img src='amp.png'/>

### Normal html

<img src='normal-html.png'/>

### PWA

<img src='pwa.png'/>

## Conclusions

Amp pages render initially fast but they take almost 3 times longer compared to the normal HTML pages to become interactive.
HTML and PWA (with scripts loaded asynchronously) pages using SSR will perorm almost the same.

## Site notes

You you came here you might be interested also in checking [the-cost-of-native-javascript-modules](https://github.com/GianlucaGuarini/the-cost-of-native-javascript-modules)