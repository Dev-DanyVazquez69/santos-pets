if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};a[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-07672ec7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5a3c8ba296105333aa86efb1e8cc1117"},{url:"/_next/static/Bz_FVdZppBkSq-m94R_iQ/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/Bz_FVdZppBkSq-m94R_iQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-e6d29e3a28a23b6d.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/414.4ea05381613a5241.js",revision:"4ea05381613a5241"},{url:"/_next/static/chunks/665-b35d59459f2902fd.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/702.cb9bc17a302aa8ba.js",revision:"cb9bc17a302aa8ba"},{url:"/_next/static/chunks/878-c1ed9f02096d3aa4.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/972-d56b5712c2f7b31a.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/(auth)/register/page-d0585db8669aae2a.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/(auth)/signin/page-344551163a2d3793.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/_not-found/page-c1bbe1b4bc8170a6.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/error-2da6af230e94aa72.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/error/page-83a8bcc9e193d111.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/layout-1de3502a4cd4d77a.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/not-found-65fb0e7c6e7f0cbc.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/page-bf1494c5a2b06d49.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/profile/pet/page-5e041f4b8d9fd7f5.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/app/profile/tutor/page-b92a8d8b62f8b170.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/dc112a36.16a8c6a6b6181c35.js",revision:"16a8c6a6b6181c35"},{url:"/_next/static/chunks/fd9d1056-c9e82d5a0bac85f6.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/main-9fe3cfbb107d4be2.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/main-app-47abc87bb4526dd9.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-c93ae45aef70a2c9.js",revision:"Bz_FVdZppBkSq-m94R_iQ"},{url:"/_next/static/css/b3cde1cbc6ead234.css",revision:"b3cde1cbc6ead234"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/android/android-launchericon-144-144.png",revision:"28d8f21099fc109fbd0c1f2db0455751"},{url:"/android/android-launchericon-192-192.png",revision:"a5415dc5546e71c7e9ed524534e07157"},{url:"/android/android-launchericon-48-48.png",revision:"2bc7ed3e143e19dcc1567a959d4403cb"},{url:"/android/android-launchericon-512-512.png",revision:"f530e2899d5526273b35e1a85f5a4a14"},{url:"/android/android-launchericon-72-72.png",revision:"cfd5f351e3d3a02f30d1415a9f0e4e56"},{url:"/android/android-launchericon-96-96.png",revision:"5137780f1364871d5b18f96fa54a5624"},{url:"/apple-touch-icon.png",revision:"834e2b4ca46e2fdd0404f358ddb9c671"},{url:"/assets/animations/animation-loading.json",revision:"c7f6ac9c1b8a30c4f787b436e49a7298"},{url:"/assets/animations/animation-login.json",revision:"d8d449d4308de38163ecb2c523e2145b"},{url:"/assets/animations/cat-404.json",revision:"4e3bfc20c60a625d3edb03197c98bd47"},{url:"/assets/avatar.png",revision:"2b9647e21950579ca672a86601738d21"},{url:"/assets/bg-bottom.png",revision:"429b8f12ab9a80f1e56ef98ab8cdd8b3"},{url:"/assets/cat.png",revision:"e235a6169d4a853b3760791c46c2ce85"},{url:"/assets/hades.jpeg",revision:"e8630efdc0106ee7670207e8dbb43181"},{url:"/assets/icons/icon-exames.png",revision:"d6c259d131ab5175e21850faafaf0041"},{url:"/assets/icons/icon-exames.png:Zone.Identifier",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/assets/icons/icon-pet.png",revision:"b12e474922430c033d2058f6859f3a4c"},{url:"/assets/icons/icon-remedio.png",revision:"bd98ff03ae44b1c47c75d5e012c1aff5"},{url:"/assets/icons/icon-remedio.png:Zone.Identifier",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/assets/icons/icon-saude.png",revision:"d76715bca8ea8d37ce7a615f021c960e"},{url:"/assets/icons/icon-saude.png:Zone.Identifier",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/assets/icons/icon-settings.png",revision:"ade29e3aae7eb5731e9748609cc87813"},{url:"/assets/icons/icon-tutor.png",revision:"a5d7b97fbcf825a6a84ea6ce4bb36135"},{url:"/assets/icons/icon-tutor.png:Zone.Identifier",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/assets/omalley.jpeg",revision:"08df1a995eb301838820d842d7ff2fca"},{url:"/favicon-48x48.png",revision:"c822e7cf0ea5490912d58f2d552b505c"},{url:"/favicon.ico",revision:"32ad89ea6f53098dabdb380152ba465f"},{url:"/favicon.svg",revision:"9e6e54ea2c2aa843f800f0b88877a28f"},{url:"/icons.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/ios/100.png",revision:"77abc26c07262334c59d50952d6a2fe3"},{url:"/ios/1024.png",revision:"f84ee64ca7f8d03b49f419f77643b158"},{url:"/ios/114.png",revision:"20cc1d70a84fe5aabbea65df888b7276"},{url:"/ios/120.png",revision:"f4c16f243fa510be54933bd48e946b84"},{url:"/ios/128.png",revision:"417f02eed487d8d209da0fcff1ddbdd8"},{url:"/ios/144.png",revision:"28d8f21099fc109fbd0c1f2db0455751"},{url:"/ios/152.png",revision:"23111908ff1a222c35ba04aefafec6c1"},{url:"/ios/16.png",revision:"a1096bedf756447a0a1f6f23ff600b9a"},{url:"/ios/167.png",revision:"2fc2f8b1f6aa5399822c796329be0f3a"},{url:"/ios/180.png",revision:"d99f399ca267a543435e542cceab2f06"},{url:"/ios/192.png",revision:"a5415dc5546e71c7e9ed524534e07157"},{url:"/ios/20.png",revision:"46c2730ff5fecf526920ba61541a53dd"},{url:"/ios/256.png",revision:"dd101cc682671769a7c7fee6ef147761"},{url:"/ios/29.png",revision:"4034a1dc543c700c176ac838cb99c16d"},{url:"/ios/32.png",revision:"31352442c2e1664c2e1691a327775ad1"},{url:"/ios/40.png",revision:"5a7c417b36ca31280ade4ecba6735b76"},{url:"/ios/50.png",revision:"6a1713c81950f2c7d88ef4d26654628a"},{url:"/ios/512.png",revision:"f530e2899d5526273b35e1a85f5a4a14"},{url:"/ios/57.png",revision:"f5ab822a52a6548d12eba20bb531951d"},{url:"/ios/58.png",revision:"0a9c52a3e8b977329756184f2a5fa691"},{url:"/ios/60.png",revision:"30fe6a7a5dea78b1d5b1980262203c66"},{url:"/ios/64.png",revision:"83451d993d23043f1fa186b863a17faa"},{url:"/ios/72.png",revision:"cfd5f351e3d3a02f30d1415a9f0e4e56"},{url:"/ios/76.png",revision:"6b80591061d35fcc0c391d87f9c5ec99"},{url:"/ios/80.png",revision:"3f4d1c5383dd0886cbc2ce9f4f638ed6"},{url:"/ios/87.png",revision:"0ee070c857b0d4c5080971b0bc71e376"},{url:"/manifest.json",revision:"d2509d29db88b6c5168f225114fb99a4"},{url:"/web-app-manifest-192x192.png",revision:"96385c52042f7e222db34a5d0e08caa4"},{url:"/web-app-manifest-512x512.png",revision:"8b65743b5d61852e29a85fb69c88f494"},{url:"/windows11/LargeTile.scale-100.png",revision:"dff3e8021233641603be524eb9e9b488"},{url:"/windows11/LargeTile.scale-125.png",revision:"f254ffcb5e4f7e0bbb7e16abfdf66973"},{url:"/windows11/LargeTile.scale-150.png",revision:"13cd1daf0cc85db5b81e91564d8ae7f0"},{url:"/windows11/LargeTile.scale-200.png",revision:"91891f8164a752017f1027aa693f06ad"},{url:"/windows11/LargeTile.scale-400.png",revision:"95a2b464739d9544d208a0265323fc01"},{url:"/windows11/SmallTile.scale-100.png",revision:"88243090e0106987f77846b7e8e5e7b1"},{url:"/windows11/SmallTile.scale-125.png",revision:"4e0f5cbd878a1912fe8ea5720bc5afc2"},{url:"/windows11/SmallTile.scale-150.png",revision:"0c6d80f0050b1deb277005c9c4b216e5"},{url:"/windows11/SmallTile.scale-200.png",revision:"6186e5df17fcbb53387ce4d402c2acc6"},{url:"/windows11/SmallTile.scale-400.png",revision:"6d468b038ab02bfc3386c626c8bacc58"},{url:"/windows11/SplashScreen.scale-100.png",revision:"d3ff9adb775c8b56ad9dea5b7220eb0a"},{url:"/windows11/SplashScreen.scale-125.png",revision:"8bfe46ebf3b542108b346739f77c7d6d"},{url:"/windows11/SplashScreen.scale-150.png",revision:"5cf557f3f1e2b5208aeee7393ae896a7"},{url:"/windows11/SplashScreen.scale-200.png",revision:"c9252d195cf0a9b0943632c119c72bd1"},{url:"/windows11/SplashScreen.scale-400.png",revision:"eb4c556fbc266e210976e7f9cde6df42"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"7531c305a96065d38487d870b4282280"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"85f7e0c37fe95dce1aaa8700b6bc7d32"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"6ecb1efe6b45bddbde847de6eb8f52e9"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"495e817bfad991763dfef6eef7276655"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"7fa624b3619a37213edcddef2a9bfe40"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"51222567f5fba37a98c2b9d7bc6670a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ba1c75985f6685ed948f44db7fe28bb3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"91c849fae178944033296356ba230002"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"03146da05817f55b728c641a4a2c8d50"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"3f2fb1a428fc735cefede47ce4bae28e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"471786a7bb340c46525f8214548d3781"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"4835d445d70259d945feebb3a04db189"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"1a7e8e2d46f4ed49c8035d0ae6043f48"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"a30f19aa164e729ae0abfe9cd7cd2350"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"8bffbeaa175ef5ef552d957b59400722"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"70cebf8760e7a65fd5940a65734b75dc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"ba79480969541666a77220688c734585"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"311966fe979a12f7ba7a1b00e9dfbf0e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"5b9d037943aec1b16c9b563d8af0972e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"edb777d12d588de63e9840eca4067cbb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"51222567f5fba37a98c2b9d7bc6670a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ba1c75985f6685ed948f44db7fe28bb3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"91c849fae178944033296356ba230002"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"03146da05817f55b728c641a4a2c8d50"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"3f2fb1a428fc735cefede47ce4bae28e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"471786a7bb340c46525f8214548d3781"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"4835d445d70259d945feebb3a04db189"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"1a7e8e2d46f4ed49c8035d0ae6043f48"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"a30f19aa164e729ae0abfe9cd7cd2350"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"8bffbeaa175ef5ef552d957b59400722"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"70cebf8760e7a65fd5940a65734b75dc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"ba79480969541666a77220688c734585"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"311966fe979a12f7ba7a1b00e9dfbf0e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"5b9d037943aec1b16c9b563d8af0972e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"edb777d12d588de63e9840eca4067cbb"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"a30f19aa164e729ae0abfe9cd7cd2350"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"f413f70f8ddb91bee4cac6b9a380438c"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"de105630c77e4d05035943ffd8eabd09"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"64c6178005616c0cdc417b51a7fc5591"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"19071db0d273f788ba536f363f34010f"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"51222567f5fba37a98c2b9d7bc6670a0"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"ba1c75985f6685ed948f44db7fe28bb3"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"91c849fae178944033296356ba230002"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"03146da05817f55b728c641a4a2c8d50"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"3f2fb1a428fc735cefede47ce4bae28e"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"471786a7bb340c46525f8214548d3781"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"4835d445d70259d945feebb3a04db189"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"1a7e8e2d46f4ed49c8035d0ae6043f48"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"a30f19aa164e729ae0abfe9cd7cd2350"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"8bffbeaa175ef5ef552d957b59400722"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"70cebf8760e7a65fd5940a65734b75dc"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"ba79480969541666a77220688c734585"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"311966fe979a12f7ba7a1b00e9dfbf0e"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"5b9d037943aec1b16c9b563d8af0972e"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"edb777d12d588de63e9840eca4067cbb"},{url:"/windows11/StoreLogo.scale-100.png",revision:"6a1713c81950f2c7d88ef4d26654628a"},{url:"/windows11/StoreLogo.scale-125.png",revision:"66f3242e72d4def99247a2051756d946"},{url:"/windows11/StoreLogo.scale-150.png",revision:"497ef2d56e39e658291a7d8b4729821b"},{url:"/windows11/StoreLogo.scale-200.png",revision:"77abc26c07262334c59d50952d6a2fe3"},{url:"/windows11/StoreLogo.scale-400.png",revision:"2060e6d7ecb5091f1522bc942daac4a5"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"fcf831e953f3ecf7487ff0bdaf21decc"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"df0f31eb0c995b80d339f751d34a832f"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"911debbb677133f93233006da311758a"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"d3ff9adb775c8b56ad9dea5b7220eb0a"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"c9252d195cf0a9b0943632c119c72bd1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
