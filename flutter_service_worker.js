'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39a562dfa193a41df330a7870f702f08",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/assets/icons/main_services/prod_sev.png": "6dc6815934d0d3f624f2507bb20a554c",
"assets/assets/icons/main_services/research.png": "c25e754c54e8f6f7168265b622332f8e",
"assets/assets/icons/main_services/training.png": "ec09705498e3ee7e999b5ec8da9139fc",
"assets/assets/icons/services/consultance.png": "9c8e892674cdf7ba20458b1844d7b6bf",
"assets/assets/icons/services/design.png": "b4118b605c334e259184aa7ace6d64aa",
"assets/assets/icons/services/domotique.png": "cedaedaf8817c389408375ece88a9d43",
"assets/assets/icons/services/ict.png": "0b95efa190154c3e6d1b7719118cf2a0",
"assets/assets/icons/services/marketing.png": "201b6a4ae4a55dcfa3709620ec40c9ec",
"assets/assets/icons/services/web.png": "de070fc7bca29c2eb6296a8221c1ee09",
"assets/assets/icons/services/webdev.png": "2dd4c220eb7e0dfc286d45153fc37112",
"assets/assets/icons/technologies/ai.png": "0fcec29cbe4c2749d18549b0ddfaee4b",
"assets/assets/icons/technologies/bd.png": "ca97e3078368c686837afa9df6e47182",
"assets/assets/icons/technologies/design.png": "cb8ab43be44a0008603332a532dd9353",
"assets/assets/icons/technologies/embarquee.png": "1681ec13db26097947b0b33237af6388",
"assets/assets/icons/technologies/framework.png": "43428fdc7e6bbfba7cbc62fe189111d3",
"assets/assets/icons/technologies/language.png": "3c822ffbb7ae7c533a6850a7d14accfc",
"assets/assets/icons/tools/ai/keras.png": "0181e32a3433c9ddce0d2449a8b6146d",
"assets/assets/icons/tools/ai/matplotlib.png": "2c71f7097523ccdc4609b41a353d8b94",
"assets/assets/icons/tools/ai/numpy.png": "075b78931a0152dfa0c42fff7630ea67",
"assets/assets/icons/tools/ai/pandas.png": "a161872cd2bee2876e38dc5b362b7212",
"assets/assets/icons/tools/ai/pytorch.png": "b2967295a9ffc2116b931ed1b6b525e6",
"assets/assets/icons/tools/ai/sklearn.png": "f91314d39302a5e94b331423ee495eae",
"assets/assets/icons/tools/ai/tensorflow.png": "6733e9d5d636be069b9de34d93ed5e83",
"assets/assets/icons/tools/bd/firebase.png": "d884988b6820a4e3cddaa4a60fbcc7fa",
"assets/assets/icons/tools/bd/mongodb.png": "3ffef65657585361b3961b000070ce76",
"assets/assets/icons/tools/bd/mysql.png": "6a46a4cf526b0073cf6425221e62fabd",
"assets/assets/icons/tools/bd/postgresql.png": "bf31ae456f156c4a36845bac5a88abbd",
"assets/assets/icons/tools/design/adobexd.png": "a06f8d2b2e015e228568fe226c4d1e7d",
"assets/assets/icons/tools/design/figma.png": "eca1fc2dd284a4bfcba341cdd11127d0",
"assets/assets/icons/tools/design/photoshop.png": "5c96bc280d52808d2816ca2d5a035b2a",
"assets/assets/icons/tools/embarquee/arduino.png": "dae5e900caca639615bd2b8bb4152cb5",
"assets/assets/icons/tools/embarquee/nodemcu.png": "d7be73e2c8d93e435d7c9cde2b2efdd1",
"assets/assets/icons/tools/embarquee/raspberry.png": "d6ba04de837c90dd53c0c2f67f23a7d1",
"assets/assets/icons/tools/frameworks/django.png": "db71abf96d24204003e56ddff2b64307",
"assets/assets/icons/tools/frameworks/flask.png": "870121093db870330062c777a3e93683",
"assets/assets/icons/tools/frameworks/flutter.png": "62e132a4aa0a2a0134f45e0040d6345d",
"assets/assets/icons/tools/frameworks/nextjs.png": "ddec78586916e0915c6dd639987fa9cc",
"assets/assets/icons/tools/frameworks/nodejs%2520(3).png": "cc8e5cbc6b5f8095cb201305586e3ea4",
"assets/assets/icons/tools/frameworks/nodejs.png": "186d005fe06a37a096e3bf07bf33fa9b",
"assets/assets/icons/tools/frameworks/react.png": "fe33747d800500ad7edefe17c25175c5",
"assets/assets/icons/tools/languages/c++.png": "51516773bfd2b88521e873a15992c604",
"assets/assets/icons/tools/languages/css.png": "ccb1255b474d99fe1458d32781fc0769",
"assets/assets/icons/tools/languages/dart.png": "4a16cc5dd39c2b23a2b1ab758f65ed45",
"assets/assets/icons/tools/languages/html.png": "0d2761efa2646d8c6456ea4393cb7536",
"assets/assets/icons/tools/languages/java.png": "1cb14ab0c52e290ad72b1bd2eaadb0a9",
"assets/assets/icons/tools/languages/javascript.png": "c6c48dcfb3eeb6ba4e612a3dbba7573d",
"assets/assets/icons/tools/languages/json.png": "c3891f94a20b0a6d84f784f3e2423bae",
"assets/assets/icons/tools/languages/plsql.png": "53ad26646421fc64415e537f214f90d6",
"assets/assets/icons/tools/languages/python.png": "3a09ce3fe3bcec3422f2a16df7c8f863",
"assets/assets/icons/values/formation.png": "90f56e109ca7a18fedd931d367dc452a",
"assets/assets/icons/values/innovation.png": "aea6f5224ac4ea7556e145c4454855dd",
"assets/assets/icons/values/interconnexion.png": "eea6d418e0c8b905c0b550aa5a6ccc47",
"assets/assets/icons/values/invention.png": "e8aca04e78df53ecf335965e32ce6e25",
"assets/assets/images/embarque-removebg-preview.png": "0c7a6577a010dd65ebb87a11c9a3d566",
"assets/assets/images/facebook.png": "3b149a0e5a55d5a92f114f091364de40",
"assets/assets/images/github.png": "73f6facb5690334ce00e33382c60bda6",
"assets/assets/images/google.png": "66047864288a9df7b69c6bc3c94d16f5",
"assets/assets/images/images%2520(1).jpg": "7ae448a1bff2ac00a797fd40e59714ea",
"assets/assets/images/images%2520(2).png": "fe31faa9a1c73d55b30ca4d6417d794a",
"assets/assets/images/images%2520(4).png": "669b3a1a734082b83f7c4b91f56c08b2",
"assets/assets/images/images__1_-removebg-preview%2520(1).png": "d0919289c8d2eb9dc2828f475bf820ef",
"assets/assets/images/images__2_-removebg-preview.png": "2d49da27340010f8e220f425b8ec8241",
"assets/assets/images/images__4_-removebg-preview.png": "65c5811f3319493364a5c4532d6e4e99",
"assets/assets/images/images__5_-removebg-preview.png": "8ca2877b72ab47411ed2fafb7ed2f194",
"assets/assets/images/nodemcu-removebg-preview.png": "4507d5ba969be9ecebdf1d4f1b863636",
"assets/assets/images/profile_pic.png": "14fadd39309977174ebbf611aa064f64",
"assets/assets/images/recherche-removebg-preview.png": "581d777c8cf76ac52bc7873bc3df3a2e",
"assets/assets/images/svg/contact.svg": "410971c1c83b3eab94fcd87b2e983ec8",
"assets/assets/images/svg/home.svg": "9c1ed3a98c1c77b5256fa72151aab8f3",
"assets/assets/images/svg/login.svg": "dce9e80fd5da8318d99b09b5a83e8406",
"assets/assets/images/svg/post.svg": "89898726ceb0b4bf4d9dc443236df01d",
"assets/assets/images/svg/project.svg": "3aa57cd54a0722df9ec2557bb9f8529a",
"assets/assets/images/svg/register.svg": "cfbc0956531ae67fb9e0360bd1d64550",
"assets/assets/images/svg/resetpassword.svg": "dd436574f77a328367f5247d4d654c53",
"assets/assets/images/svg/service.svg": "2d8bb9a83ff128cda49264852761f3c9",
"assets/assets/images/t%25C3%25A9l%25C3%25A9chargement-removebg-preview%2520(1).png": "9cf24a110f34be5c57476239041259df",
"assets/assets/images/t%25C3%25A9l%25C3%25A9chargement__3_-removebg-preview.png": "5ffd67029cfa98aeaf498bf002a537a5",
"assets/assets/images/team/christophe.jpg": "3f62ca632f36d3637e8e138245034384",
"assets/assets/images/team/franklin.jpg": "21579359def60c0aba10e13393dbc33e",
"assets/assets/images/team/jordan.jpg": "d5cd6b8f996458cacb02b5ff18457f5b",
"assets/assets/images/team/josephus.jpeg": "2668a5df51d644a14cbdc4c52ce625d7",
"assets/assets/images/team/jospin.jpg": "9eee5509366f5c1f9a6e3107cc4a843c",
"assets/assets/logo/logo.png": "00fc743a3896ff81fca91534f00d33d9",
"assets/assets/logo/logo_icon.jpg": "8b39631323adc0cfe84d37a3e6e3745a",
"assets/FontManifest.json": "59f64f58c5d034491abd4cebdd59705a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "224ddfddc58165ae074b27222c37d060",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f464b12a7a27787f05a4f11abc4939db",
"/": "f464b12a7a27787f05a4f11abc4939db",
"main.dart.js": "e6da3ff439c9f92a0819cbe57f2b25cc",
"manifest.json": "5106b021a9298f7e7ce55af6f3ac1ddb",
"version.json": "9af13df19031ad1bf6bc602b723e3dbc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
