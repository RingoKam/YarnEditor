if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise(async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()})),i.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},i=(i,c)=>{Promise.all(i.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(i)};self.define=(i,r,n)=>{c[i]||(c[i]=Promise.resolve().then(()=>{let c={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map(i=>{switch(i){case"exports":return c;case"module":return s;default:return e(i)}})).then(e=>{const i=n(...e);return c.default||(c.default=i),c})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/0.css",revision:"2e96f0c1e8cd06b5e690edbe72dab7f8"},{url:"fonts/context-menu-icons.eot",revision:"cc26e986ac53238679cef6af5cbc5104"},{url:"fonts/context-menu-icons.ttf",revision:"66fe7d78e602880e529daf66c8cb85d3"},{url:"fonts/context-menu-icons.woff",revision:"4568f559933f6b3db786835cf61387b1"},{url:"fonts/context-menu-icons.woff2",revision:"3124260e1569c74431e23dd130111455"},{url:"fonts/droid-sans-mono.ttf",revision:"a267c0b23e4794a4d9f2092027ab0fc7"},{url:"icon.ico",revision:"0158a98eda5da93408305a8f817bd61e"},{url:"icon_128x128.png",revision:"54a04953b96717b70ace1f2bcae537c1"},{url:"icon_192x192.ico",revision:"0158a98eda5da93408305a8f817bd61e"},{url:"icon_192x192.png",revision:"bd585463236696d22e72c822e9e2c36e"},{url:"icon_32x32.ico",revision:"0158a98eda5da93408305a8f817bd61e"},{url:"icon_512x512.png",revision:"41a610c236dfc4ca3db11af9f1d1efd1"},{url:"icon_96x96.png",revision:"4f50d85588e2e334596e0bcc71892e42"},{url:"index.html",revision:"a011c6d34926106e3874eee1199385f6"},{url:"js/main.02e0492b72d9254142f6.js",revision:"33a81aa3028be410657a5239b70d5c4e"},{url:"js/runtime.02e0492b72d9254142f6.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"manifest.json",revision:"739fe669ba3e27832ccb8c8a87db2c6d"},{url:"public/dictionaries/en/index.aff",revision:"ff0059b0644df7008c9f635f77da7601"},{url:"public/dictionaries/en/index.dic",revision:"2f6e098411997f3d1217865bb468947f"},{url:"public/droid-sans-mono.ttf",revision:"a267c0b23e4794a4d9f2092027ab0fc7"},{url:"public/icon.ico",revision:"0158a98eda5da93408305a8f817bd61e"},{url:"public/icon.png",revision:"73d45685f29fa05223dbb6cf7fb57097"},{url:"public/images/append.png",revision:"f6d9b17fab77f5116fcb9367bb730da4"},{url:"public/images/dropbox.ico",revision:"51e2de798b41db26b6a0ec187959d394"},{url:"public/images/exp-data.png",revision:"3f259048a63c7510c24191f8f75a3a61"},{url:"public/images/github.png",revision:"665125bd6068ffdbbe1b24ed10dfb5e3"},{url:"public/images/icons.png",revision:"4207a97346300aecc34f2e8ba8d1d3d3"},{url:"public/images/octocat.png",revision:"ad821a254e7d9825608ab2dca943a8c5"},{url:"public/images/open.png",revision:"2fb289a60caf8b144cf79e3a6303538e"},{url:"public/images/pixel.png",revision:"85f678b520893f6007833e0ae0a1f106"},{url:"public/images/settings.png",revision:"b219cce95da1546e5a67b0b2b7172831"},{url:"public/images/sort.png",revision:"ce7bbb86723161b4a009b50262f4b926"},{url:"public/images/twine-favicon-152.png",revision:"83e847f2aeb1d4f8f7f05cbb6be593c8"},{url:"public/images/undo-redo.png",revision:"7270caeb2954001e5e664969bb396998"},{url:"public/images/xml.png",revision:"1d9125c9fff6c12cae0797f710b5e24c"},{url:"public/images/zooms.png",revision:"e38ef1d5f375d28f0f07ad7ee7dde609"},{url:"public/mode-yarn.js",revision:"e20980af69280ee37603e4c6bb8ee7d6"},{url:"public/service-worker.js",revision:"a6507fb906252c077ad097a8a235e483"},{url:"public/templates/node.html",revision:"df3a64e933f73f88115992eedc6c80a6"},{url:"public/theme-yarn.js",revision:"2fe43fbb7c796eddba021471ef0262ea"},{url:"public/themes/blueprint.css",revision:"5dcacd2686408d6d659f8850ae85fb73"},{url:"public/themes/classic.css",revision:"87d3fd85e2954b1a2f64c9f5b2efcec3"},{url:"public/version.json",revision:"4393593d46593f948eabf201d0cbd1ef"}],{})}));
//# sourceMappingURL=service-worker.js.map
