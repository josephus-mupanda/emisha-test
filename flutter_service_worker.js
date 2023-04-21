'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "18e03d45a5d490e170b36360a9d1c762",
".git/config": "b565cc363bc97a188dfa5b2c51b9699c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "662f15658facc7f11de213516d70d759",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "555b0d86c12c816fdbf53c3f0f4ed52b",
".git/logs/refs/heads/main": "1cb3342ba83f4572c61688e0ca06d2af",
".git/logs/refs/remotes/origin/main": "a3d2c4e772905561db17e1842766baed",
".git/objects/00/5d11c9fe7be053f6259eb8ae43944506896aaa": "9aa09b09f96122ef604501e416f5785d",
".git/objects/01/643047ce2ac2fb243406cace2c2a96e5121f45": "ea4148bef8f9ed967ba3ece8b4e6cda6",
".git/objects/01/b2862d5178d9b20bb5c60c5773f15d13d05ff9": "068b637567a2241d6507be944a78f0f3",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/4423003bae230470b9d4ec5178f6d49557eba2": "90e6ffe72d82954efb8d52865231bac6",
".git/objects/03/684c3fff5a09d0889e25d478b9875402f171ed": "26526b1a03eece045697f66adfc29a7d",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/0c/355af9df20e49cfe258dc12aef2f58d9be0133": "a4042cc31686a5f48968246a9651263f",
".git/objects/0c/f6e5641646286b64ad70f29cca39291e7140cb": "f51b5cb582d70ae7e9336ecd548a6068",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/21d549ad23c17fa78a5e9cd9b9db64c5512409": "1f663d6c67dd192958c1dc03b1e7ad1f",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/9c010cdaf2660ebbe1e098b24a0360804102f6": "a697529083d90cd2dd06e8cb6dae7a94",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/f655e1e088dc873b0d0fdf4bdfdda8c20e79c0": "8da4e43ca6a271cf75287adeb6d2052b",
".git/objects/12/a6c4025ca8e18abd89a882736660e4f7ad276e": "808702df83efd335895e5429a8a12507",
".git/objects/13/d008cafeb7ced26fff6e41eafa9cfdb88f577e": "7ed51cafe021236da52688021a48e77a",
".git/objects/16/b71636f04a4ec16390a59f5e7075e405e87e10": "789baa840d689bbb2de54fb3da14fd00",
".git/objects/19/818d60a67a144d7eeee2b6f9d639e464c259d5": "a9c91ef28842f62b79ce33854ac9e3c7",
".git/objects/1c/0f9b38d7b5113fabcb7a4b42acd1bccdc19d41": "b2246cbbc02f23f340b84b5498c54d64",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1c/c0f2282154122e26ae9b93fbbda31185b2eeed": "09b49fe6c3572483390b2e135360aae2",
".git/objects/1e/f7af2f1fd5f21a67132e1a114383bfcb6e252b": "3e35a553abd38b54ce340abf1c84282c",
".git/objects/20/e88ddf224294792a999bbfd770630f96060f2f": "70c1d5c6471c67b94971bea49871b18a",
".git/objects/22/4f736db28c7be3cfa77b54952b8cc375b68b4b": "a1a28ba894464dc23e5a96df0f433be7",
".git/objects/22/f13ad3c37c44b40c915dd85c819ed8c52266bd": "d18c051a45666f8840b9876a2f161953",
".git/objects/24/8bf44a5209e9e7e8c51d2270596f9bcba8bbd2": "74f57bddb54b285f41244759686e7dfb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/8c1d3e31d8814dcfd58c4f8e27a17a48151d17": "9ad211789edf86d6e807cd9a7822c65e",
".git/objects/29/bbd8a469478f3164b0777bb4c401c734918ec2": "a9fa408be279fa56cec5bfae29ddf2bc",
".git/objects/29/d5f7419bd5a91f113861f1ccd615afdbce712f": "e3ac6ec442953675f750009ff701de51",
".git/objects/2a/0acbc86db6e465457e674f63e0686b24663668": "bb0755d1d514a34af9ed72ed95726711",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2c/3add10c7caba42d2dc0a19128295919c18daf9": "c599d2a6b6b2cdcc503b1af357579fac",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e091de7bc90d78e09dd9ee45881fb04278a08b": "9fdec439aedc846692f116c28bd67603",
".git/objects/2f/9b404287d891ba4bce39c4eb0be54dff738a14": "67259c76dd5b468fe44efdc66fc7e059",
".git/objects/2f/b627cb905ef681e250e89dc1ead31ac6b748ac": "257a9712a88343c3fa3072861583125c",
".git/objects/33/33611b975b697df135a4f672f82141094d7130": "d0f485cacc2c33af227b5fae9cef36c0",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/4eb77094795a50b3770acbdea884cbf3cff932": "3c1e464776066a7b3543d431cce02179",
".git/objects/39/71ee2aff17474bbf413aa162957be4fa3f044f": "7340cafbd836ed541bfed22a324711f9",
".git/objects/3b/754b384ae3955a91eadaac84a0d74218335dd1": "06803a36a8e055946f0f06d3d70e8ea0",
".git/objects/3c/2a3271012bc7a36af4527349cd99adc3822c04": "8035e2fc6ea4a395650ba247e40f667b",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3c/f6bcd730ff233aed4f0ff356be9a829381b687": "e7c2b3e7643a36749786fa1314782687",
".git/objects/3d/ed7ee97ea8b8b8a47f0f0ea250357db1498455": "019710ea3bf8b50ffdd05ca93e7c0b31",
".git/objects/3e/31de0e260f7b2924843bf58dbae832583c2f4d": "e80d76af435379466729b7f1fcc489a2",
".git/objects/3e/aac0d7ba87e81bc450b513a63196fb2937c951": "c8bc64f073c5ba814178f388a2900b79",
".git/objects/40/a1c7fe6cbb00bfbf4d503508bb8daeeb45b6fd": "61b3e5538e2ba86abad6511da0431afa",
".git/objects/42/6899a77cedee22ad989303503e9e5b419d24bc": "647fdcb88a15d6b6006720a2fe9848dc",
".git/objects/43/16e7b2b646ce947c79d815b824f6f31b2c3bc9": "d67a3f926e80465b15671f368145f701",
".git/objects/44/af68eff6daa6a71b8fab67930caa5b6afff761": "d7ec0452d9a88108a13191bc76596084",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/b5c2129b9a1421662eb467db46df001c79f4df": "cd822bdc7fb46dc7da3b86cc10919f1d",
".git/objects/48/98d8992918ca8b2c39b2bad7a94d91b9d38478": "1329c4b90ab801b8cb0f38f900731811",
".git/objects/49/5fc9b425dc272bb3d87c22e1b6c48cb4a5c60d": "dbe46c7b41308890cae11061eaefa62b",
".git/objects/4a/4343952bd0025c93720b4ac81a6acd3cebe54e": "a93e171ce54bc9b27fe554c1e2078ae4",
".git/objects/4c/28613f9a35d74205f404e3d41580d0eecf1347": "9629e7de0dc074f00e559322735b48a5",
".git/objects/4c/4e70093638cb75272afdb3a63f639064e3f02e": "f272bdccac4b92f375337fedc2585890",
".git/objects/4c/b96757d1ef5af6fb916a11ba1f747f794ee638": "b075d81ede1da1b06f59f4581cb7ff8d",
".git/objects/4d/571983f21751984f6a86941ce9c777c8e503f5": "474083496280926c853d39b6a2f99e2e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/96cf414187a294b755b75272c1b09a68058a53": "e1b1db169a0ed36f448cc47b84d3c010",
".git/objects/51/46db0b1871d8fc4c1b0f8e9f13d069225bf724": "5dad2b7a3d901b1725ecb7b8f8b1d40a",
".git/objects/51/d16e13b37468961fcaebeefbb26c125b30d629": "21ebff138ada9c1072e7f1d13656a34a",
".git/objects/51/f90dfb2dadb825d035c7ffcc36a8ebd86445ce": "a1026e074a13e20036fd6dfe679810c8",
".git/objects/53/f921fede9b3b548f66c648d22ea03d55511641": "43c6fd61eb416d62ff725f199b52f511",
".git/objects/54/28c9c6dd788af7e626be91d6986d07cf6ae1b6": "054c49471d86b61bf98b92587c38cb8f",
".git/objects/57/265b5d354d383dff2fb4497b2c17a6964f894d": "0d6d156bb5553e044adf60b8ee8166fe",
".git/objects/57/80e25b0a619c0cc181d9139fbe73d60be2396f": "41d297728624307882dfe2dde1569458",
".git/objects/58/19e0841d5302bccb1b52ca4bb22f2c1f470574": "0b80b1d1b026320d7505f26f0340bc40",
".git/objects/5c/d3de8c087a1c8610603b6cdd1ed1dc3d5e2107": "54c5d2058712891dfd871a98850b0b96",
".git/objects/5d/3e8887d67c0798f40b7dd1dee24d87dc566d70": "91dc699fc4059302722251ea0e2352e2",
".git/objects/5e/0e7d6c3046304903f3b80a312b5294d9590c3b": "c88eb21245eb75b2eaf8d9d4e20403d6",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/62/be7dc26ec5d1e951a732b4cd8c1e28d9e0ef89": "7031842244e8c538361f8b693beb2b5f",
".git/objects/65/98a48810cb2c62869107667d03595fc997ba3c": "fe2a264f8bf41ec2ec382f6e3fa3246f",
".git/objects/67/77b95af5a43ee437334910ae916544fae9f5c6": "aba78c1a2c8362f736eeb9b6749b1ef1",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/e3c376ce40c26368402e0c58621ba063a9af2d": "3435d8a138cf864b52fa6e24a63ec81f",
".git/objects/68/fe7c9733e07fee73b16e38e42d6b8504d93d91": "ad635af1224269315ae5000eab08ce48",
".git/objects/69/01dcfa247104e3dbbedbb64145e03308c083a6": "164a012e9a2c5d62249b8eb602a18e4f",
".git/objects/69/222ca93349e6b3100ba1903af9ba948191c7ef": "49900db7ce7600499e9876215c02215f",
".git/objects/6c/58f18a88ed61eda5fc1969a2a6b89bbe0d0985": "8c0e6de2e87cd67e38ddb68cc29f0b76",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/e54f7ff7ec380e01408afefad110e5afbc6064": "e2d6ad3c32fd5341f8fc2edbb5f72447",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/9279daefbb746564babab403af1204dfbbf2df": "a67c16500511997bd6210b7bf25d7b08",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/a1e4d5c8b692daf88a784f1e4b142bf86373cd": "b465f1c3b6380826983cef15b6c2121e",
".git/objects/71/cc9927603c15a7d5d720219b3a5dd6d4d31333": "6f4c2133a93d67622abb546966a68cc4",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/9a4d2eca96eba84b3a16b979514e665127c22f": "8ad67449328c1ae7abeea3dcb7d14a88",
".git/objects/77/19e0db2559031787823ef8b06a400684e16f34": "a3330a6bd32d0dfe62364bcb059b2d56",
".git/objects/79/35a59c47565328b77964de7582bd4ea5362beb": "4e980761d70999a78c2ea890db5c5172",
".git/objects/79/57272122103d5250bec124b07b0614d16754a9": "b43c033e939677db8617c1a7170e8f13",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7d/91605d39d2357d63fdbeee07b96c78c10e48ad": "b1353618a642f5375fa216289d461c7f",
".git/objects/7d/e6d940812967f9842da364b2a8b302167ebcdf": "7c5559eb9de72b9869540f09621d71e8",
".git/objects/7e/21fb33103cb5c6af3ad597decc27c71d4729bc": "ba96b056cba93d546a64d06c4585f4d5",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/84/98483b654816495500ab8ece5a9ed096550151": "45a312161dceaeebadac57ea8fd9e1aa",
".git/objects/85/3bcae2177db87e0876ff085e6b1c4b4eee974b": "3d153a3df33c738ca67a7cf28af98d1b",
".git/objects/85/c9ebc584ead6674165db4371ba442d3e694826": "10c0b79a2aba0bab043be821d69c3613",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/67bede82028b7c04d54628499a6e2ce84d3549": "8d694a3d711394891a08e162b677b6bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e003a1a1c8a0a9779f6fa6cccc55e79d6224e2": "1582870e525dd0cf17e4653915a67038",
".git/objects/89/904156bf34321c1940e6539803d42c022b815c": "8799ce4d8e576b950c0a589c4d9fcae5",
".git/objects/89/be6b2f9bfbdc67cdeb147198cd6bfa59cc9db8": "44a3ac886e5907511c1c14aa77a99b39",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e7a542a838c7246bd46b953ba71dc859485f3e": "b91cce48589488a8dcf0342c275d482d",
".git/objects/8d/04f656c1c17aeffa5b98de6c93c59122e4900d": "634140ee0a89c5a7ac107ebcb339866a",
".git/objects/8e/2f684ccc864dbfc93f2443d469f3d4a2225289": "653dccc4600196bd00d1bdd6eeba5207",
".git/objects/8e/385fce47f26a0ec5e104d3dcc1c909d2ee6be6": "e5b5fdc663e72553de95babe70ae0b38",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8f/066e6d139ce60b9907f2f2e22e4c328cdaa1a0": "3d3db68e5f179f78372becb961f25db5",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/1c5d23dfda0412f9fd6e1e93b22b0f084ecd9c": "de8d62fd230b21531d0e2c64d540a5db",
".git/objects/92/1bf15af6db27c274580a7f6012d1d56564a4a9": "73c637a65b1ff090afcf1ba8b4f2b9a9",
".git/objects/92/e76e92e6c5ef9564b628456c6a7a8af9f6ded0": "cf2d6e52def39573e594e77285a7be71",
".git/objects/93/af7a7ea3b75395c2e4891d760a418ab36b8025": "b627de0086e84403c8bb69c2b82b1ae4",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/3a6ca0e5e23b4797656f0232364dddcdedad9c": "6126e0772a951b9c595416c7a0e32f86",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/96/61f606e6ce6dc763c2c92dedce668f259d9a8a": "eb33dab38444c89a19feb8e496c1c5f5",
".git/objects/96/a1fb387c4156ef6c0e28d8a7c3f239c8143894": "a88ab47fd183f0e5bf0777a043578fdc",
".git/objects/97/a2efb74b937bde7cd246d7294c4672cd680e5d": "976b2c2432f10e2f8006a2b342613834",
".git/objects/98/94ce15aeba088d03253fcb27f3e5aea2617a52": "391368d2a19c2fd81310873317aeee8c",
".git/objects/99/5230c1bc80c31159654deb4d75c79736cc6b46": "ccf641375a6a5da36ad6b867d6f0d7de",
".git/objects/99/a92b02be09069a6a72c7fbd2e94b13a394a102": "6ef1fe22a18e963a5e0a9882108ebf7a",
".git/objects/9a/12dcc2f0299a431eb2a906417139eda01a731d": "cbb91ffb3a3854b02863f9afd128a078",
".git/objects/9a/a8f53dd21951df13031d2b727e2bbe053ad79a": "223939f55b0ae980cf24c70d7668bf28",
".git/objects/9a/af23772fad0285ea1718f551b5db03dcc81477": "e50452e5ed490b81b2cb1c8989334e77",
".git/objects/9c/57fb7f21fe58b7296e05430c692eff351c5e80": "c02ac143e4393f2d8a2cca4643ddccdf",
".git/objects/9c/84307996a2f6ed1bd7665b3e67260ac657d78b": "c83d075b760d65ee1a4a1d2451533fa3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/1f5128bf180f34d7588a3657caf7607db730d0": "8974b79212d0ce05e547ae3e39dc6dd2",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a7/8bbfc12e80a3daa77b14ce38c75cf4ad93f1ee": "849d69f0db68d40262da0026a6c88483",
".git/objects/a8/4dcfcfce25f93de43eae9733012e847cec4537": "9b93d28cdbfc11ed7fc73fd97556efc2",
".git/objects/a8/ae6282ba281911e01ac5e8ac06c95ce87d4afb": "7801f915a601abaf6ce29f9bcd246986",
".git/objects/a8/d45bfad72d0ae46aae08189c0799622f751d68": "ea85b224dda5ba90751afccdf563befa",
".git/objects/a9/4300eb84851bd86e216b31fe9b9e129572af8c": "52b18293cc0fd8aed2039ee207705666",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/ab/1071958527ef670ed6f29dced0a8a16bacce97": "a4579d430c220960ee3d3a0e326b1293",
".git/objects/ab/69ec59b21ae7487928e9ec703c9a33f0c4777f": "ee2a3b85ab914a159ed30f2d95228f73",
".git/objects/ac/3f1f07f58684efe7031de7943b6812f831215d": "5e8d0d30d4e9b6905b8e792feed329f7",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b0/383d628dfb41e859451766573d59f883ee6ca1": "412adb095167f322de22b30c216f4dbf",
".git/objects/b0/bd0df665fe3a1d18456b96e387888c241797b9": "ac106c65e4da1bbb80f22e81dc9543c5",
".git/objects/b1/bb8e506048a9c78c3ddafe8d5503bb9509a976": "8b62296867d49a378d57ee56ce2650e4",
".git/objects/b2/a9bf557a4f15b6b3878624104d4b282bd195ad": "dd25ae5c56b0984fdd181c0433440fc6",
".git/objects/b3/6f620bab2f83f4abd246ac810f1392bbb762d2": "b296a8662b6bf4c655cf6f95e431b95f",
".git/objects/b5/d58a343a83c5497118396f4d4cbcd4fb38fc80": "5dbf04c5eb267fcc8ca5b92dc8c740b0",
".git/objects/b6/fbe0648b7b7a334a59efe8b04d507201227258": "22137b19e8ff7bf0ff85a7ab52f28b8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1008931638da058823109b2a5b45fbc96556b7": "5fea84123251ad5eecf5f151fc0b5d63",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/59d632f726862d0af057090bc14e1451528e5c": "3e5c7aee60fe5c81fc6074292b548dfa",
".git/objects/c1/ae308d91d1eeb4ce76878a1554b2ef60616c97": "97864a0670bf4a866ef93657d3d0375e",
".git/objects/c2/7dc53b0201c91a17bbef92e3ee899cf32294d6": "2ecd1c16489a1eb02b910da98d9d2c48",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/ca/4c5045fedcb1179ae2cf26ef1c667223ca943c": "eb21fb994799f4e4f528b714c28e9293",
".git/objects/cb/dd1628d4b0c5f5657156ac3853d58402700f8c": "25e7cd1ea173f53b2b87dbcf123a63a0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/e6fffb2f8c207a1d2a6509a702d85433fd6fd1": "d0ba8d0349e886ed1fb26484d868a2a6",
".git/objects/d5/bf85a42fc6295ea30924ceece77871bf67d03c": "ab2cce54c0e5c9c2fc82a35b81fcdbab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d5d6a92e9db41b7f9746f7c755fa2b73fce77c": "21ed7f74a8a76d168562e5bf6bc9d2fe",
".git/objects/d8/a251c7c46441b9ac1e2c6d176a217c16595460": "87bbd68e89ce9dcc855f173e0802d66b",
".git/objects/d8/c96cb1785698d9040371c8535a92276896738c": "34c99fb498726ef59dde0dfc4f664594",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/ecd61df1510ece1fab236166d8e8d153e37a14": "3c8c7ae49b373e04f2e7e388c436f016",
".git/objects/dc/055e984854d22c122c7a007827fff538ac9395": "3d87fa4926a92436dd05f634b15e4c56",
".git/objects/dd/227e5e19bcba4678798d27be9cbfbdeafd1c11": "cd623efcbfaf9140541b8b21284b504e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/b7c221d199536a1c98fcaf8b3959169cbc02c7": "3e263bd6708ff6bf24f9a983a912a70a",
".git/objects/e1/d1a25b437efb82fb44dd46ab0a14cce73bf8bc": "057e0171b2125047a35685ba464b8f6d",
".git/objects/e2/e64456c7f8e6b714d699a912bda3fc21583f44": "abcb9efd018b8bc75a096cf323207f04",
".git/objects/e3/92492abdb3640da80637c8e69d7049e9ed3c41": "457c98db190edf70f51f43c67464a919",
".git/objects/e3/ad279b519324aac8ab6a0fd4dead40422eef47": "20195159980bee0f6b82242be7cdb039",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e4/c11d0ca37b57951850b51e715d720ac0300230": "b3627ece439834fd64d93b764e1ea363",
".git/objects/e4/d96fc7b1b889e1967d3fdf2c0a919a625b018e": "bd2227d56686b8af42299043bb24ddc2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/0a030cc217acbf7c6a5b0fa23c9c02e18c63cd": "7986f9cc48c3b07ad2fcb208f19d4bef",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fdd707e55e1d050595f4c58c45ae4ab44d000d": "f75fb9db9bc528e1ca887c240e413a32",
".git/objects/ec/b8fca541b6024f1b2fc199f83b68c124b1e560": "db261185287fecbf61f7aad0c4363c8e",
".git/objects/ec/da1c1a27ce0a77878c048068b9e6de277833ca": "af168e0fda344a240fd23e2c822072ce",
".git/objects/ed/28789b44a9fc1f95a2268a4bbf3423f874465f": "c83adfad7d1063fd41b24dc0a5ebe849",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/ee/d930e71b37697d1143b96eb8a2c0fa4643fbc7": "561d4565f54e0411bc62f8f2a3987b94",
".git/objects/f0/4fed553135b845e4f68ce381060ca60a28011d": "8fcded8deea8ebcdc7c76f6e1dd8478d",
".git/objects/f1/ebbfebba4001be10c7abef4b88d3c8dd509623": "efee916cf69ee7cccaef90cb8a44f21f",
".git/objects/f1/ef7c7c14871363ffcd002e793eee96de46dc7a": "0a0b41ffcb3a34278102908101b32ca2",
".git/objects/f5/3f57a540e83ccdae4585350dbf9ed648218fbb": "dc9329be68252a334edf912f71721452",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f7/b23879ff0494ac0fc3344c7f0392f873a0dd80": "ffb86d925247ab22259f4fe6ba299b11",
".git/objects/f9/89828580e36cc83f824841fe5bd62e3f6c8121": "91527797bdfad9f44e191e36d06fbf4f",
".git/objects/f9/99b691bf00fa234808533dec779ee9fc2629f9": "f4db595e30572ab52f017b127c498d97",
".git/objects/fa/d1096292aac64fbd1b72e8009771118932fd8c": "1c0b583111b739bbe9c19ecf6d574e56",
".git/objects/fb/7ef639e9d3b115f0dfe0398e6875023485a3db": "d2e01dc45c0f983c723a66ff2fcf0bb5",
".git/objects/fc/49c8244c1b52638ccd254cfb2b15add1e8eb3c": "ea1f85eb30651e1d5fe9111fda064dcc",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/3fe4bc488828059c97d8f7a2994fe57c326868": "1c6dcfcc0bb3d27a2b0427449c855ecf",
".git/objects/ff/c5ac2ec8024716f4619811ec812ab85a74c016": "77f8460a513f1ccc91a98b51efdf0593",
".git/refs/heads/main": "3508fdf28b38b863d19b616c08c05886",
".git/refs/remotes/origin/main": "3508fdf28b38b863d19b616c08c05886",
"assets/AssetManifest.json": "4f7276e5a9e80d92d5d6b9c95ef75ce2",
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
"assets/assets/images/svg/contact.svg": "410971c1c83b3eab94fcd87b2e983ec8",
"assets/assets/images/svg/home.svg": "9c1ed3a98c1c77b5256fa72151aab8f3",
"assets/assets/images/svg/login.svg": "dce9e80fd5da8318d99b09b5a83e8406",
"assets/assets/images/svg/post.svg": "89898726ceb0b4bf4d9dc443236df01d",
"assets/assets/images/svg/project.svg": "3aa57cd54a0722df9ec2557bb9f8529a",
"assets/assets/images/svg/register.svg": "cfbc0956531ae67fb9e0360bd1d64550",
"assets/assets/images/svg/resetpassword.svg": "dd436574f77a328367f5247d4d654c53",
"assets/assets/images/svg/service.svg": "2d8bb9a83ff128cda49264852761f3c9",
"assets/assets/images/team/christophe.jpg": "68e740d76143c758be49543b9bd32fa0",
"assets/assets/images/team/franklin.jpg": "c7fcab586be7a8b8a4309faf0f9ce0d4",
"assets/assets/images/team/jordan.jpg": "d5cd6b8f996458cacb02b5ff18457f5b",
"assets/assets/images/team/josephus.jpeg": "e795624bcf0fba4e21aacd7da3443e0e",
"assets/assets/images/team/jospin.jpg": "21b477db18650cfa917596d8569be7e8",
"assets/assets/logo/logo.png": "d42cd093fa8eb3b2cd1626c4a59cf275",
"assets/FontManifest.json": "1c4cd4fe9aa9930528469e817a8c0550",
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
"index.html": "b2ca85a9b061c487c096fd0e151fcefa",
"/": "b2ca85a9b061c487c096fd0e151fcefa",
"logo_icon.png": "4e20a65aa0b6143273f8010ded874908",
"main.dart.js": "a0dbfabacd584919006a8a9b94f7a89f",
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
