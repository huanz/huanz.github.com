/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","2cafb1c14319848f9e0d9a9bb2fe3a18"],["/about/index.html","803ef9514be0bda737b50a99ff54c493"],["/archive/index.html","1c6f67e25b10f8e37fb3b22817a03467"],["/archives/2014/01/index.html","1ede75199534410ffc97fe4d7829913e"],["/archives/2014/02/index.html","8dd5d0cce95bd7e948e3ab77e8a6eea3"],["/archives/2014/03/index.html","cd4be16841b1eb288f716727dfc8b2fa"],["/archives/2014/04/index.html","766e40a07c7ac957688468bf0cb477c8"],["/archives/2014/05/index.html","880587346f5652a67d22e60e1c6dd216"],["/archives/2014/07/index.html","d7706253830dadb04d598f5f0d3e7e25"],["/archives/2014/08/index.html","28060edfb6cee5855cdeb8ede0fe753e"],["/archives/2014/09/index.html","32227fab4477fdbea6f5ca7a9face5f6"],["/archives/2014/10/index.html","ed4e157a50f97e3c287b2dfa80d5d2e1"],["/archives/2014/12/index.html","c7fc46e7df59aae351224dd8927f81e3"],["/archives/2014/index.html","a3fbd3f9e93b2275ee6895d4b87cdc55"],["/archives/2015/01/index.html","373fb53e85780454d5655900fe501762"],["/archives/2015/03/index.html","f07740cf87d8ad8d1dd1b110ebf97a43"],["/archives/2015/06/index.html","b027f85c206c353741e1829369f148c4"],["/archives/2015/07/index.html","18e961dd8ebfb8a8d558e3885c7369b9"],["/archives/2015/09/index.html","ae67c7a3bcb417a2a7c52d1a273cf19a"],["/archives/2015/index.html","cf367536fb005de68b81e9204e2918a7"],["/archives/2016/02/index.html","fd0dfd01f65164df940125f47672e616"],["/archives/2016/03/index.html","a6cb1b81b8c8048769e0d2aca32a653d"],["/archives/2016/index.html","4ba146d6c771a3eba594e58c9fe41845"],["/archives/2017/01/index.html","95fc675afda18f37b35f0467551530a1"],["/archives/2017/03/index.html","352d959cfe87099086951215c9d28a87"],["/archives/2017/08/index.html","d739d79ad7676ef453834f552e2e97c7"],["/archives/2017/index.html","36442db7a53e5c7927a9f94a65cd81b2"],["/archives/index.html","98d5984e90734fef381fe6f314826df7"],["/books/index.html","d087d2ae86b342f8b1e4cfadbddef093"],["/browserconfig.xml","3c6db76933727b7792b4d19a1220df64"],["/categories/diary/index.html","6afb5ad3e563b99874db6581c0517d0a"],["/categories/technology/index.html","8ea3391cba5871816808b8de4bad2c7e"],["/categories/technology/page/2/index.html","0786aacbf5bd6274a4a749fda2196cb3"],["/categories/technology/page/3/index.html","e2d8013bbe31b40e31ae352e1c0d98a6"],["/categories/technology/page/4/index.html","3801d303001de8fdef264135c4bc868b"],["/categories/technology/page/5/index.html","98b94a5dd19984ac3be4a0ba7074d86d"],["/css/style.css","ff060097ab33e750564740e872dbe83a"],["/demo/alipay/auto.html","9e7bdc7783defa46b3d38bf7595d06f8"],["/demo/alipay/bukas.html","7d686f83bc937f705174abb76b390528"],["/demo/alipay/index.html","d60630c06b178a51eb8a771b4a812bfb"],["/demo/alipay/jinxing.html","4a390c988049abde39a558a0aa6ad25e"],["/demo/alipay/package.html","8999a56e75ec837c6fad32da96ef7147"],["/demo/alipay/shibiao.html","bedbe2c473d049fb15a9d91a008e8e03"],["/demo/backbone/v0.5/css/bootstrap-theme.css","521843d19184fbfca0b13f66bffdedcc"],["/demo/backbone/v0.5/css/bootstrap-theme.min.css","2eba6afef4ec3eff6ff250d16880f4c0"],["/demo/backbone/v0.5/css/bootstrap.css","b9ab1d050bb48d300d478070986f71c0"],["/demo/backbone/v0.5/css/bootstrap.min.css","35fc838ce584c1eb81b3bebe245442d6"],["/demo/backbone/v0.5/fonts/glyphicons-halflings-regular.eot","aa16cd35628e6dddf56e766c9aa4ae63"],["/demo/backbone/v0.5/fonts/glyphicons-halflings-regular.svg","0a5c48c69a25a93e37ed62db813387fa"],["/demo/backbone/v0.5/fonts/glyphicons-halflings-regular.ttf","47da44498fc073d9fff9ab0cdb0bef8e"],["/demo/backbone/v0.5/fonts/glyphicons-halflings-regular.woff","5eae1f7217b606d3580dd70ac840fea1"],["/demo/backbone/v0.5/index.html","1a5087b5b79041c5aeef609cfcd50ab2"],["/demo/backbone/v1.0/css/bootstrap-theme.css","521843d19184fbfca0b13f66bffdedcc"],["/demo/backbone/v1.0/css/bootstrap-theme.min.css","2eba6afef4ec3eff6ff250d16880f4c0"],["/demo/backbone/v1.0/css/bootstrap.css","b9ab1d050bb48d300d478070986f71c0"],["/demo/backbone/v1.0/css/bootstrap.min.css","35fc838ce584c1eb81b3bebe245442d6"],["/demo/backbone/v1.0/fonts/glyphicons-halflings-regular.eot","aa16cd35628e6dddf56e766c9aa4ae63"],["/demo/backbone/v1.0/fonts/glyphicons-halflings-regular.svg","0a5c48c69a25a93e37ed62db813387fa"],["/demo/backbone/v1.0/fonts/glyphicons-halflings-regular.ttf","47da44498fc073d9fff9ab0cdb0bef8e"],["/demo/backbone/v1.0/fonts/glyphicons-halflings-regular.woff","5eae1f7217b606d3580dd70ac840fea1"],["/demo/backbone/v1.0/index.html","c2b9b356e04bbba4ef6ffc3340452f1e"],["/demo/backbone/v1.0/js/main.js","a258105f58c67b9b66fcd23be84e584d"],["/demo/css3/index.html","a1094679983cd9d900063f20f4fa7684"],["/demo/css3/load1.css","ffa02036258eb8b4960ceff6a4f1e427"],["/demo/css3/load2.css","eea5a628f44933ce6212d47c7e566736"],["/demo/css3/load3.css","10edf6a4fe4c996fe2cb9a3b4951b3f3"],["/demo/css3/load4.css","66b2c82d502cfb5f899e381ca8ca2f08"],["/demo/css3/load5.css","3b9bccf48f63ca2303bf669ac66c8a2e"],["/demo/css3/load6.css","e7b95c605c27204fe90686e560e1e94f"],["/demo/css3/load7.css","895cede290c31b8e2a741d4d9e276fc8"],["/demo/css3/load8.css","991a83a12d2f904407b2473a09423b98"],["/demo/css3/main.css","6c58407b0f3f6aae1c10203d080bd8aa"],["/demo/leil/v1.0/css/main.css","5912926c305db55018e771ec2175fcb7"],["/demo/leil/v1.0/img/1_01.jpg","8803a14461a26e8fdfab834ba7414580"],["/demo/leil/v1.0/img/1_02.jpg","3b3610b2aba85a6cd92fc75189b2010d"],["/demo/leil/v1.0/img/1_03.jpg","b2942e21550e96395c5f625cd361d246"],["/demo/leil/v1.0/img/1_04.jpg","74469322f859272475cf236e914a91b0"],["/demo/leil/v1.0/img/1_05.jpg","de9b734e4f85947f9e6ed84024146464"],["/demo/leil/v1.0/img/2_01.jpg","d2a08d7c70726bafa7356b77b6b4f645"],["/demo/leil/v1.0/img/2_02.jpg","0f1481e6dc511997d9f72288d3aac05d"],["/demo/leil/v1.0/img/2_03.jpg","6404d204b3515bd76a7bdbd08937a0ea"],["/demo/leil/v1.0/img/2_04.jpg","eb186b8f561a3d4b1376aa68b41e2eec"],["/demo/leil/v1.0/img/2_05.jpg","5bddcd9d512555ceaea7e291dd1f8a72"],["/demo/leil/v1.0/img/3_01.jpg","fd80f8675f1b3a7fbff59ff5b24b568d"],["/demo/leil/v1.0/img/3_02.jpg","8f337468863c1f26b80a8aabed2b1af2"],["/demo/leil/v1.0/img/3_03.jpg","d4e150d6a826113b86f2f1285887fbb4"],["/demo/leil/v1.0/img/3_04.jpg","98e63b983279db4c2142dc1b7c4c47d7"],["/demo/leil/v1.0/img/3_05.jpg","ad2eaef305864730f1b4fadd50393439"],["/demo/leil/v1.0/img/4_01.jpg","8217472f95f8be693785444647225e42"],["/demo/leil/v1.0/img/4_02.jpg","e36cf4d23208553fa10229a4cbee1114"],["/demo/leil/v1.0/img/4_03.jpg","2d6a7d2e6f6d1f07555a96ccb0b95288"],["/demo/leil/v1.0/img/4_04.jpg","8e42c1dd3ef85e08461049976cdb07c0"],["/demo/leil/v1.0/img/4_05.jpg","b371373ad11a96b4ab4943b341b05cf3"],["/demo/leil/v1.0/img/5_01.jpg","13951a400e34a43c4a934c10a9accba7"],["/demo/leil/v1.0/img/5_02.jpg","4f45f607ca79d1d2bba131352ff35a8f"],["/demo/leil/v1.0/img/5_03.jpg","c1b58193600d149dbd20ca6810007349"],["/demo/leil/v1.0/img/5_04.jpg","abeb6d59d524439b6d3cc184e3163b8d"],["/demo/leil/v1.0/img/5_05.jpg","ae211e338fde04de9a603f919c7cb2dd"],["/demo/leil/v1.0/img/6_0.jpg","8f613c3eac7756e8ec2f3cf5b1ef1e41"],["/demo/leil/v1.0/img/6_01.jpg","3b1bb8f62664080defc6c90598a6a74a"],["/demo/leil/v1.0/img/6_02.jpg","8bf6b28d96ef71661f52a69210c45b06"],["/demo/leil/v1.0/img/6_03.jpg","7f823acfbac9d9c0801ef4a6e8bcb436"],["/demo/leil/v1.0/img/6_04.jpg","83a8350f8a537f2ada6b148b6a46101d"],["/demo/leil/v1.0/img/7_0.jpg","ad195d04676fc34cfb4a8a6e5279c35c"],["/demo/leil/v1.0/img/7_01.jpg","beda99231eb535a4e791b5c40d314813"],["/demo/leil/v1.0/img/8_01.jpg","c1a42b30c6b48e81aa653293e7ad95d4"],["/demo/leil/v1.0/img/8_02.jpg","f94b8d610075d230009d522eea61e2da"],["/demo/leil/v1.0/img/8_03.jpg","a8272db43060495913d281bb27f9f2a0"],["/demo/leil/v1.0/img/8_04.jpg","39c208397d941c3723bb7c69f6145dae"],["/demo/leil/v1.0/img/8_05.jpg","e52df23af4220c08b0614871c41cf29f"],["/demo/leil/v1.0/img/9_01.jpg","2fb8f56b70492f9444a8c95c12c09284"],["/demo/leil/v1.0/img/9_02.jpg","e0cec521ef3cf909e75bcee9d9d042ad"],["/demo/leil/v1.0/img/9_03.jpg","d97ac169e80db2d7abf18ec9690ba8cf"],["/demo/leil/v1.0/img/9_04.jpg","426f9ba9aa8f43423c5e3357d7eaac2d"],["/demo/leil/v1.0/img/9_05.jpg","dffc498c7d73d59daae39bd191f67509"],["/demo/leil/v1.0/img/bg.jpg","bce3c5bad4f73d8e44a381142f9b095a"],["/demo/leil/v1.0/img/btn-car.jpg","1e76dd32b70d3d28d0b5eff1442aec07"],["/demo/leil/v1.0/index.html","3e1a821678e3546a0366da9ea8b7b958"],["/demo/leil/v1.0/js/main.js","4181cd372d5fe359a1452b20a586f625"],["/demo/leil/v1.0/js/main.min.js","8e31827dc252731608a646ea34da2652"],["/demo/leil/v1.0/js/zepto.min.js","9ab17b778ade368f63f587598581e4ad"],["/demo/leil/v1.0/js/zepto.touchSwipe.min.js","3d2273ce6f8102f3f958d67c1d429788"],["/demo/leil/v2.0/css/main.css","47d6d7d7d39cee8dcfbd74331d8edd0d"],["/demo/leil/v2.0/img/10_01.jpg","1672dd3a1ceec99cd71ddda6009c3b65"],["/demo/leil/v2.0/img/10_02.jpg","7d0f9cdd56cacbf6fa88eb8001dda6f9"],["/demo/leil/v2.0/img/10_03.jpg","d4223c9888f298918069dc437b7fc51e"],["/demo/leil/v2.0/img/10_04.jpg","c8257b84c3c6c95b43209ee43b5fc137"],["/demo/leil/v2.0/img/10_05.jpg","5251909756f640a588e7158bca8aa99f"],["/demo/leil/v2.0/img/1_01.jpg","fc5fbf96e1f1f555dcb810b6d1099945"],["/demo/leil/v2.0/img/1_02.jpg","fdc2d692c43a4ebd5ba2ee4d354a94a9"],["/demo/leil/v2.0/img/1_03.jpg","e2f4990850d36cfc6355b6cf1e08e28e"],["/demo/leil/v2.0/img/1_04.jpg","75a280d305656c7893409626c3e4cd2a"],["/demo/leil/v2.0/img/1_05.jpg","f050437b526f9b0a273f3b89bd9634c9"],["/demo/leil/v2.0/img/2_01.jpg","d2a08d7c70726bafa7356b77b6b4f645"],["/demo/leil/v2.0/img/2_02.jpg","0f1481e6dc511997d9f72288d3aac05d"],["/demo/leil/v2.0/img/2_03.jpg","6404d204b3515bd76a7bdbd08937a0ea"],["/demo/leil/v2.0/img/2_04.jpg","eb186b8f561a3d4b1376aa68b41e2eec"],["/demo/leil/v2.0/img/2_05.jpg","5bddcd9d512555ceaea7e291dd1f8a72"],["/demo/leil/v2.0/img/2_1.jpg","92009794eb9eace341e98eb172e94c42"],["/demo/leil/v2.0/img/2_2.jpg","bca28f5c7e344cccd4b3b02f86f46147"],["/demo/leil/v2.0/img/2_3.jpg","95d0542d892164e053921071966b509e"],["/demo/leil/v2.0/img/2_4.jpg","7ad578bf26cf3b6e660bbaa14f0d1b78"],["/demo/leil/v2.0/img/2_5.jpg","fc7935ebc0dd07e1a04c244e49696449"],["/demo/leil/v2.0/img/3_01.jpg","5f58fc65f8d57e1709db0c998e516ce1"],["/demo/leil/v2.0/img/3_02.jpg","3f2b3dbb5088dae6e08389eb8cf58a74"],["/demo/leil/v2.0/img/3_03.jpg","395bc51b5494e12e6d152de8157db5a5"],["/demo/leil/v2.0/img/3_04.jpg","99e29ffc85dafcf542a81ed1df550a21"],["/demo/leil/v2.0/img/3_05.jpg","f794d4ecdc943aee7ab1392092e9539a"],["/demo/leil/v2.0/img/4_01.jpg","14f9b411ee8b864970c9cc2cefca02cf"],["/demo/leil/v2.0/img/4_02.jpg","0ec923f6f353db9bd818fec1f919e600"],["/demo/leil/v2.0/img/4_03.jpg","adf69b8d9f84e99ab999d207cfde186a"],["/demo/leil/v2.0/img/4_04.jpg","7e4a64c15a9da886e620627cc3c0abb6"],["/demo/leil/v2.0/img/4_05.jpg","c406db2d386d9b224dc0f1a07dff26b5"],["/demo/leil/v2.0/img/5_01.jpg","3f90f64a4e3eb139a26db0c156e9cb2e"],["/demo/leil/v2.0/img/5_02.jpg","6bfd3daed15b3d41d138328b1acebff2"],["/demo/leil/v2.0/img/5_03.jpg","0a1d17ebda3bae4b751275d652ffc28d"],["/demo/leil/v2.0/img/5_04.jpg","27b12a64cbfd8cfd7dfbb89d0a0596ae"],["/demo/leil/v2.0/img/5_05.jpg","820972177c3f7cf09edb78853e6ab46a"],["/demo/leil/v2.0/img/6_0.jpg","c5934e0a99b0510db6211eff6b535c7f"],["/demo/leil/v2.0/img/6_01.jpg","3b1bb8f62664080defc6c90598a6a74a"],["/demo/leil/v2.0/img/6_02.jpg","8bf6b28d96ef71661f52a69210c45b06"],["/demo/leil/v2.0/img/6_03.jpg","7f823acfbac9d9c0801ef4a6e8bcb436"],["/demo/leil/v2.0/img/6_04.jpg","83a8350f8a537f2ada6b148b6a46101d"],["/demo/leil/v2.0/img/6_1.jpg","8208b18095b33652cfd6aec6f6ed9579"],["/demo/leil/v2.0/img/6_2.jpg","f61225a42afc6926681e0a8ee4d87976"],["/demo/leil/v2.0/img/6_3.jpg","4659e1f8b3288b94a1373cb0e5366201"],["/demo/leil/v2.0/img/6_4.jpg","240476fc07f4f84362fff1853b9b3bb1"],["/demo/leil/v2.0/img/6_5.jpg","edfd85d3a8df37559f6769b9170cddea"],["/demo/leil/v2.0/img/6_6.jpg","868d79f6e276e104bcd36a1f4b0d1c41"],["/demo/leil/v2.0/img/7_0.jpg","ad195d04676fc34cfb4a8a6e5279c35c"],["/demo/leil/v2.0/img/7_01.jpg","eb1f0b82517c39a3938eaa6765edd0a9"],["/demo/leil/v2.0/img/7_02.jpg","4adceb1f5c22074ff1547a2e0fa0d395"],["/demo/leil/v2.0/img/7_03.jpg","7e32f2cd0b13991c1b0eb1259be02e62"],["/demo/leil/v2.0/img/7_04.jpg","5098754c9de8dd3a8a8d6f21da49b671"],["/demo/leil/v2.0/img/7_05.jpg","4a56249e2e6c2152c6e96f5fdcf0e908"],["/demo/leil/v2.0/img/7_06.jpg","0c9eb1244f1ffce8c06e02f4a22512eb"],["/demo/leil/v2.0/img/7_07.jpg","00954057588b588c3a68c2ce374f0e4e"],["/demo/leil/v2.0/img/8_01.jpg","c1a42b30c6b48e81aa653293e7ad95d4"],["/demo/leil/v2.0/img/8_02.jpg","f94b8d610075d230009d522eea61e2da"],["/demo/leil/v2.0/img/8_03.jpg","a8272db43060495913d281bb27f9f2a0"],["/demo/leil/v2.0/img/8_04.jpg","39c208397d941c3723bb7c69f6145dae"],["/demo/leil/v2.0/img/8_05.jpg","e52df23af4220c08b0614871c41cf29f"],["/demo/leil/v2.0/img/9_01.jpg","2fb8f56b70492f9444a8c95c12c09284"],["/demo/leil/v2.0/img/9_02.jpg","e0cec521ef3cf909e75bcee9d9d042ad"],["/demo/leil/v2.0/img/9_03.jpg","d97ac169e80db2d7abf18ec9690ba8cf"],["/demo/leil/v2.0/img/9_04.jpg","426f9ba9aa8f43423c5e3357d7eaac2d"],["/demo/leil/v2.0/img/9_05.jpg","dffc498c7d73d59daae39bd191f67509"],["/demo/leil/v2.0/img/bg.jpg","bce3c5bad4f73d8e44a381142f9b095a"],["/demo/leil/v2.0/img/btn-car.jpg","1e76dd32b70d3d28d0b5eff1442aec07"],["/demo/leil/v2.0/img/lei.gif","827b0bf91acb942b5000fd0cd0572b6f"],["/demo/leil/v2.0/img/logo.gif","18b3faf4e7c4236c0d376f6d0537995b"],["/demo/leil/v2.0/img/pre_next.png","980c5503b0157f4a4fb5a085fa5c629c"],["/demo/leil/v2.0/img/trigger.gif","18438edcb530ce0dff18c5df2bbd16f8"],["/demo/leil/v2.0/index.html","ec5a366843a032feceeb013cf415c87e"],["/demo/leil/v2.0/js/main.js","87cddb2d120df27069110772e7b909cd"],["/demo/leil/v2.0/js/zepto.min.js","9ab17b778ade368f63f587598581e4ad"],["/demo/leil/v2.0/js/zepto.touchSwipe.min.js","3d2273ce6f8102f3f958d67c1d429788"],["/demo/leil/v3.0/css/main.css","d62b50b175483641bae94d96814948cc"],["/demo/leil/v3.0/img/10_01.jpg","1672dd3a1ceec99cd71ddda6009c3b65"],["/demo/leil/v3.0/img/10_02.jpg","7d0f9cdd56cacbf6fa88eb8001dda6f9"],["/demo/leil/v3.0/img/10_03.jpg","d4223c9888f298918069dc437b7fc51e"],["/demo/leil/v3.0/img/10_04.jpg","c8257b84c3c6c95b43209ee43b5fc137"],["/demo/leil/v3.0/img/10_05.jpg","5251909756f640a588e7158bca8aa99f"],["/demo/leil/v3.0/img/11.jpg","8d942f358dfa4172bea91f6b893e23a4"],["/demo/leil/v3.0/img/1_01.jpg","fc5fbf96e1f1f555dcb810b6d1099945"],["/demo/leil/v3.0/img/1_02.jpg","fdc2d692c43a4ebd5ba2ee4d354a94a9"],["/demo/leil/v3.0/img/1_03.jpg","e2f4990850d36cfc6355b6cf1e08e28e"],["/demo/leil/v3.0/img/1_04.jpg","75a280d305656c7893409626c3e4cd2a"],["/demo/leil/v3.0/img/1_05.jpg","f050437b526f9b0a273f3b89bd9634c9"],["/demo/leil/v3.0/img/2_01.jpg","d2a08d7c70726bafa7356b77b6b4f645"],["/demo/leil/v3.0/img/2_02.jpg","0f1481e6dc511997d9f72288d3aac05d"],["/demo/leil/v3.0/img/2_03.jpg","6404d204b3515bd76a7bdbd08937a0ea"],["/demo/leil/v3.0/img/2_04.jpg","eb186b8f561a3d4b1376aa68b41e2eec"],["/demo/leil/v3.0/img/2_05.jpg","5bddcd9d512555ceaea7e291dd1f8a72"],["/demo/leil/v3.0/img/2_1.jpg","92009794eb9eace341e98eb172e94c42"],["/demo/leil/v3.0/img/2_2.jpg","bca28f5c7e344cccd4b3b02f86f46147"],["/demo/leil/v3.0/img/2_3.jpg","95d0542d892164e053921071966b509e"],["/demo/leil/v3.0/img/2_4.jpg","7ad578bf26cf3b6e660bbaa14f0d1b78"],["/demo/leil/v3.0/img/2_5.jpg","fc7935ebc0dd07e1a04c244e49696449"],["/demo/leil/v3.0/img/3_01.jpg","5f58fc65f8d57e1709db0c998e516ce1"],["/demo/leil/v3.0/img/3_02.jpg","3f2b3dbb5088dae6e08389eb8cf58a74"],["/demo/leil/v3.0/img/3_03.jpg","395bc51b5494e12e6d152de8157db5a5"],["/demo/leil/v3.0/img/3_04.jpg","99e29ffc85dafcf542a81ed1df550a21"],["/demo/leil/v3.0/img/3_05.jpg","f794d4ecdc943aee7ab1392092e9539a"],["/demo/leil/v3.0/img/4_01.jpg","14f9b411ee8b864970c9cc2cefca02cf"],["/demo/leil/v3.0/img/4_02.jpg","0ec923f6f353db9bd818fec1f919e600"],["/demo/leil/v3.0/img/4_03.jpg","adf69b8d9f84e99ab999d207cfde186a"],["/demo/leil/v3.0/img/4_04.jpg","7e4a64c15a9da886e620627cc3c0abb6"],["/demo/leil/v3.0/img/4_05.jpg","c406db2d386d9b224dc0f1a07dff26b5"],["/demo/leil/v3.0/img/5_01.jpg","3f90f64a4e3eb139a26db0c156e9cb2e"],["/demo/leil/v3.0/img/5_02.jpg","6bfd3daed15b3d41d138328b1acebff2"],["/demo/leil/v3.0/img/5_03.jpg","0a1d17ebda3bae4b751275d652ffc28d"],["/demo/leil/v3.0/img/5_04.jpg","27b12a64cbfd8cfd7dfbb89d0a0596ae"],["/demo/leil/v3.0/img/5_05.jpg","820972177c3f7cf09edb78853e6ab46a"],["/demo/leil/v3.0/img/6_0.jpg","c5934e0a99b0510db6211eff6b535c7f"],["/demo/leil/v3.0/img/6_01.jpg","8f7e4defd73c7ed021b69d4b9746e3f8"],["/demo/leil/v3.0/img/6_01___.jpg","3b1bb8f62664080defc6c90598a6a74a"],["/demo/leil/v3.0/img/6_02.jpg","8bf6b28d96ef71661f52a69210c45b06"],["/demo/leil/v3.0/img/6_03.jpg","7f823acfbac9d9c0801ef4a6e8bcb436"],["/demo/leil/v3.0/img/6_04.jpg","83a8350f8a537f2ada6b148b6a46101d"],["/demo/leil/v3.0/img/6_1.jpg","8208b18095b33652cfd6aec6f6ed9579"],["/demo/leil/v3.0/img/6_2.jpg","f61225a42afc6926681e0a8ee4d87976"],["/demo/leil/v3.0/img/6_3.jpg","4659e1f8b3288b94a1373cb0e5366201"],["/demo/leil/v3.0/img/6_4.jpg","240476fc07f4f84362fff1853b9b3bb1"],["/demo/leil/v3.0/img/6_5.jpg","edfd85d3a8df37559f6769b9170cddea"],["/demo/leil/v3.0/img/6_6.jpg","868d79f6e276e104bcd36a1f4b0d1c41"],["/demo/leil/v3.0/img/7_0.jpg","7e32f2cd0b13991c1b0eb1259be02e62"],["/demo/leil/v3.0/img/7_00.jpg","ad195d04676fc34cfb4a8a6e5279c35c"],["/demo/leil/v3.0/img/7_1.jpg","5098754c9de8dd3a8a8d6f21da49b671"],["/demo/leil/v3.0/img/7_2.jpg","0c9eb1244f1ffce8c06e02f4a22512eb"],["/demo/leil/v3.0/img/7_3.jpg","4adceb1f5c22074ff1547a2e0fa0d395"],["/demo/leil/v3.0/img/7_4.jpg","00954057588b588c3a68c2ce374f0e4e"],["/demo/leil/v3.0/img/7_5.jpg","4a56249e2e6c2152c6e96f5fdcf0e908"],["/demo/leil/v3.0/img/7_6.jpg","eb1f0b82517c39a3938eaa6765edd0a9"],["/demo/leil/v3.0/img/8_01.jpg","d366fc37313fb26212440a9f2776e7c5"],["/demo/leil/v3.0/img/8_01___.jpg","c1a42b30c6b48e81aa653293e7ad95d4"],["/demo/leil/v3.0/img/8_02.jpg","f94b8d610075d230009d522eea61e2da"],["/demo/leil/v3.0/img/8_03.jpg","a8272db43060495913d281bb27f9f2a0"],["/demo/leil/v3.0/img/8_04.jpg","39c208397d941c3723bb7c69f6145dae"],["/demo/leil/v3.0/img/8_05.jpg","e52df23af4220c08b0614871c41cf29f"],["/demo/leil/v3.0/img/9.jpg","d51f3e63753a4733b7b5dec98027169b"],["/demo/leil/v3.0/img/9_01.jpg","2fb8f56b70492f9444a8c95c12c09284"],["/demo/leil/v3.0/img/9_02.jpg","e0cec521ef3cf909e75bcee9d9d042ad"],["/demo/leil/v3.0/img/9_03.jpg","d97ac169e80db2d7abf18ec9690ba8cf"],["/demo/leil/v3.0/img/9_04.jpg","426f9ba9aa8f43423c5e3357d7eaac2d"],["/demo/leil/v3.0/img/9_05.jpg","dffc498c7d73d59daae39bd191f67509"],["/demo/leil/v3.0/img/bg.jpg","bce3c5bad4f73d8e44a381142f9b095a"],["/demo/leil/v3.0/img/btn-car.jpg","1e76dd32b70d3d28d0b5eff1442aec07"],["/demo/leil/v3.0/img/css_sprite01.png","86bdb5d2209a9c3efd27bd9b050b4039"],["/demo/leil/v3.0/img/lei.gif","827b0bf91acb942b5000fd0cd0572b6f"],["/demo/leil/v3.0/img/logo.gif","18b3faf4e7c4236c0d376f6d0537995b"],["/demo/leil/v3.0/img/logo1.gif","58d6043d31f7e242b75c34b033e909e6"],["/demo/leil/v3.0/img/logo2.gif","249c9ab2c927544888355d8e11259fd1"],["/demo/leil/v3.0/img/pre_next.png","980c5503b0157f4a4fb5a085fa5c629c"],["/demo/leil/v3.0/img/share.png","08804eeffc8e8caf40d5930489efec88"],["/demo/leil/v3.0/img/trigger.gif","18438edcb530ce0dff18c5df2bbd16f8"],["/demo/leil/v3.0/index.html","b116a210c705ed0f9fa587b58e3708ec"],["/demo/leil/v3.0/js/main.js","52d9487edeca6c2c9f39acc4f54d064a"],["/demo/leil/v3.0/js/zepto.min.js","9ab17b778ade368f63f587598581e4ad"],["/demo/leil/v3.0/js/zepto.touchSwipe.min.js","3d2273ce6f8102f3f958d67c1d429788"],["/demo/libs/backbone/1.1.2/backbone-min.js","9c3e3189b75efd56066402f80c3e781b"],["/demo/libs/backbone/1.1.2/backbone.js","c1a39c11a8351d3e28f0b7085624b35e"],["/demo/libs/backbone/backbone.localStorage-min.js","40017b493c2e420474d3b62aaee4d600"],["/demo/libs/backbone/backbone.localStorage.js","0090947d422876e0e3b257ddd052ac46"],["/demo/libs/bootstrap/bootstrap.js","cf1cf2fce27179c0de8a71c73b378f07"],["/demo/libs/bootstrap/bootstrap.min.js","353240ad37d1b084a53b1575f8ce57da"],["/demo/libs/jquery/1.11.0/jquery-1.11.0.js","3b80424646a7ecdb19273d86800c1ac0"],["/demo/libs/jquery/1.11.0/jquery-1.11.0.min.js","8fc25e27d42774aeae6edbc0a18b72aa"],["/demo/libs/jquery/2.1.0/jquery-2.1.0.js","3177091fb9705dd978689ba11bf0609a"],["/demo/libs/jquery/2.1.0/jquery-2.1.0.min.js","5ca7582261c421482436dfdf3af9bffe"],["/demo/libs/jquery/jquery-1.11.3.min.js","895323ed2f7258af4fae2c738c8aea49"],["/demo/libs/underscore/1.6.0/underscore-min.js","dd9663be9a71f3570bc35f0edba28712"],["/demo/libs/underscore/1.6.0/underscore.js","a09bb7689b7d5b1d33a0290a632bfb85"],["/demo/pd/css/main.css","6d271e1f7b7dfc2a698268ae9ad4de95"],["/demo/pd/img/bg0.png","319a9b07f7b0e54b60313bff172f6302"],["/demo/pd/img/f1.png","3ca6d9b05c3b59a56613666952c8e791"],["/demo/pd/img/f2.png","ca6f8331bc2ffbac99c9cc9e69cfd573"],["/demo/pd/img/f3.png","1f552dc90b1128ffd09a26a879b18ebb"],["/demo/pd/img/first1.png","432af5a90eac3990e563346b670dc5c7"],["/demo/pd/img/first2.png","f7caef976d769e9cee4bd27fc6044faf"],["/demo/pd/img/first3.png","2829d2a3342af51cfb9376f33d2a1b88"],["/demo/pd/img/first4.png","5361038edc400e32a9c7489d4d656516"],["/demo/pd/img/first5.png","40a4a8134ac38ddb5912e43d8ad97b5a"],["/demo/pd/img/first6.png","9cca7aaf8215c545f0de68fcced2c474"],["/demo/pd/img/flower.png","e91e43f17963f69b71d23960bb4d7aa7"],["/demo/pd/img/hand.png","77537749a0142443f57bc50ca38c0d2c"],["/demo/pd/img/hand2.png","8b2d28d9a4bd173b069f47d2bd9f7dd2"],["/demo/pd/img/s1.png","dad31b7bf637366375cba00c34927a2d"],["/demo/pd/img/s2.png","2348f6f0d8ff4f83737347d7094432b9"],["/demo/pd/img/sbg.png","afd7b2c586a05038a4d3a4ace3132e0e"],["/demo/pd/img/silent.png","3644b0f3c56a9a76e52231e22ac56a16"],["/demo/pd/img/t1.png","7317eb905689a5f4808664b1456f3d96"],["/demo/pd/img/t2.png","37d930fc3134ac414f94aa86cdfeb667"],["/demo/pd/img/t3.png","389db2bbbde9a331696be0056cc73c49"],["/demo/pd/img/t4.png","fd9fbee53f178df34dc06ef9458a6eaf"],["/demo/pd/img/t5.png","6d540dadfe6c81415cf0f8e02ba000e0"],["/demo/pd/img/t6.png","1515c78a01f98a9c1fac19c694b510e6"],["/demo/pd/img/tbg.png","45ae1029e008e41cc2725969e26c6287"],["/demo/pd/index.html","fcf2a15aa8ada561e2284093c3d37027"],["/demo/pd/js/all.js","dc25d2961dce6c6c4854f66121b7a2c4"],["/demo/pd/life.html","8bd9dd171c54797ae874aeaac37fad78"],["/demo/pd/road.html","001090e416e8809550e9e98a7b83927f"],["/demo/pd/story.html","d87b096e276250748d24b0de0739c1d4"],["/demo/pd/trajectory.html","e5843cf277689c6f293d1d88d42dff75"],["/demo/pd/v0.6/css/main.css","e7c5de3baf8fbc828f86549f133e3012"],["/demo/pd/v0.6/img/bg0.png","319a9b07f7b0e54b60313bff172f6302"],["/demo/pd/v0.6/img/first1.png","0a5664157f5359c37828f57887d344a8"],["/demo/pd/v0.6/img/first2.png","f7caef976d769e9cee4bd27fc6044faf"],["/demo/pd/v0.6/img/first3.png","2829d2a3342af51cfb9376f33d2a1b88"],["/demo/pd/v0.6/img/first4.png","5361038edc400e32a9c7489d4d656516"],["/demo/pd/v0.6/img/first5.png","40a4a8134ac38ddb5912e43d8ad97b5a"],["/demo/pd/v0.6/img/first6.png","9cca7aaf8215c545f0de68fcced2c474"],["/demo/pd/v0.6/img/flower.png","e91e43f17963f69b71d23960bb4d7aa7"],["/demo/pd/v0.6/img/hand.png","77537749a0142443f57bc50ca38c0d2c"],["/demo/pd/v0.6/img/hand2.png","8b2d28d9a4bd173b069f47d2bd9f7dd2"],["/demo/pd/v0.6/img/s1.png","dad31b7bf637366375cba00c34927a2d"],["/demo/pd/v0.6/img/s2.png","2348f6f0d8ff4f83737347d7094432b9"],["/demo/pd/v0.6/img/sbg.png","afd7b2c586a05038a4d3a4ace3132e0e"],["/demo/pd/v0.6/img/silent.png","3644b0f3c56a9a76e52231e22ac56a16"],["/demo/pd/v0.6/img/t1.png","514291456a6c1363f6a846e3c12d33c7"],["/demo/pd/v0.6/img/t2.png","37d930fc3134ac414f94aa86cdfeb667"],["/demo/pd/v0.6/img/t3.png","389db2bbbde9a331696be0056cc73c49"],["/demo/pd/v0.6/img/t4.png","fd9fbee53f178df34dc06ef9458a6eaf"],["/demo/pd/v0.6/img/t5.png","6d540dadfe6c81415cf0f8e02ba000e0"],["/demo/pd/v0.6/img/t6.png","1515c78a01f98a9c1fac19c694b510e6"],["/demo/pd/v0.6/img/tbg.png","45ae1029e008e41cc2725969e26c6287"],["/demo/pd/v0.6/index.html","7bf5f813f893911ba7ac982e588b8a11"],["/demo/pd/v0.6/js/all.js","a1459cb88b402cd8c614892e82f9353a"],["/demo/pd/v0.6/js/animo.js","9b00ce6b089c51e10782fc10d61b7891"],["/demo/pd/v0.6/js/jquery.pageScroll.js","bfabfabf96bb9ca7a7aae9491710baa3"],["/demo/pd/v0.6/js/touchSlider.js","c50e5b0c6a10d705d3afa23fd8ba8dba"],["/demo/pd/v0.6/js/zepto.min.js","219946c39754431640022486a9764caf"],["/demo/tableExport/Blob.js","ebe8d888efffa0844e70264fdf087909"],["/demo/tableExport/FileSaver.js","1025055219aa41f0ad790e67b4980bf7"],["/demo/tableExport/index.html","2831acfb37a34673b1f7e978b485f77a"],["/demo/tableExport/jquery.tableExport.js","beef730b7ac198b306e0a8111000a2b5"],["/demo/tableExport/tableExport.js","c6920ee6fe3cfefdbcb3706c53ca8921"],["/fonts/chancery/apple-chancery-webfont.eot","4ed7e60585ac6083e18a2df5a5c91cc1"],["/fonts/chancery/apple-chancery-webfont.svg","e325e4f2b070121ea7d4050023b9f6f2"],["/fonts/chancery/apple-chancery-webfont.ttf","49ec3c7bf028bca65ea9ef93614b2363"],["/fonts/chancery/apple-chancery-webfont.woff","2e9659ae195f4a74a314901d88520ad0"],["/fonts/chancery/apple-chancery-webfont.woff2","27abc5a878ad4ae5482636aabd88d62b"],["/hospital/index.html","293a2f782270ae6098781f6000d88637"],["/image/icon/120x120.png","d1c867aac75ea20e627c7b42212bc265"],["/image/icon/144x144.png","ece23d7f2bc80d5ee4a9cf3e408893f4"],["/image/icon/150x150.png","16051ae8182c5c42601ecafcf10d9c74"],["/image/icon/16x16.png","6ec2e3928e91e8847a8a4416e07258c1"],["/image/icon/192x192.png","addd93e4a91571b31b7bb8ad91c07ec7"],["/image/icon/310x310.png","489c332034b72f9a15141d9fa2ffe580"],["/image/icon/32x32.png","ed631df7857a74c5fcff8088915fb04b"],["/image/icon/48x48.png","e721c9046217400f23fb5ca2b54fa8d2"],["/image/icon/500x500.png","c9dbfe58f4d851704f5c564ce74e425a"],["/image/icon/512x512.png","56be55c743be762b70e7ff5bfab73871"],["/image/icon/60x60.png","8e3bdd5941cebcd717a3f19b0be499b2"],["/image/icon/70x70.png","e2398013a187c4a329ee5f194853db64"],["/image/icon/72x72.png","a9306929f74df2ec44fbc72d2bda8648"],["/image/icon/96x96.png","bd748166d7338a6549d5d2c4c877505f"],["/image/reward/alipay.png","109980a36fd45b3de45d4c7114a1146a"],["/image/reward/wechat.png","a388b007745929187e83470e73f6dcd3"],["/index.html","398c978692a8bca04123e67ebd631d2c"],["/js/src/even.js","e8a60e57ee649c9bf4a50a99808edd6e"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/lib/nprogress/nprogress.min.css","b56eecc7424d9754f2848d5df85fda0b"],["/lib/nprogress/nprogress.min.js","6310b6a231440f84d36211236e970709"],["/lib/pjax/jquery.pjax.min.js","17fbd50e03d8b8caa56dd3e01d098153"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/manifest.json","805c026b161e3fd28b0c7788ea10c2f8"],["/page/2/index.html","40abdc601edf25b530d6be226a520b3b"],["/page/3/index.html","47238daf9bce19af30176fda984f72d3"],["/page/4/index.html","52ef2f6cb51bb4ce995c01c7b4a7a0aa"],["/page/5/index.html","201147ce0793d6c9914259bae49bf8b9"],["/post/2014/01/phpcms关键代码分享/index.html","4ace26d4a1b1e4e80bf59727bd94c2ba"],["/post/2014/01/sublime插件推荐/index.html","a48927eab6ec149e667b21eac807b55f"],["/post/2014/01/我的博客折腾记/index.html","d3aae47c78c7c84a6b011e6d89268aac"],["/post/2014/02/初来咋到——广州/index.html","154c1672a899f28ca8edb557b1e12536"],["/post/2014/03/Backbone实战教程1/index.html","3f855bc762c8ad1c7006f57f170bcee8"],["/post/2014/03/Backbone实战教程2/index.html","bed68a104e8ffff03f7d123cfc902e1b"],["/post/2014/03/Google JavaScript 编码风格/index.html","e96b550a396cecaff8da1112ecd6c7eb"],["/post/2014/03/Google JavaScript 语言规范/index.html","55a6d9fbdc2625f81d34bc6516939c05"],["/post/2014/03/nodejs学习资料/index.html","de3cb22bbdfd3894122038d9e0d220f6"],["/post/2014/03/在webstorm中配置compass/index.html","d45a525955db20addf159b3600602f48"],["/post/2014/03/如何使用js捕获css3动画/index.html","e170227388402fdd699e10619b1f81db"],["/post/2014/04/CSS里内置的计数器/index.html","1aeaa5f3ba56687b48e1d75354c93a71"],["/post/2014/04/一起来做博客之域名/index.html","4a3d969b92aecdcc039ce72d7a192fad"],["/post/2014/04/使用Helium找出页面上无用的CSS样式/index.html","7649b121c77919aadc0aa5c94f3f34fb"],["/post/2014/04/利用函数的惰性载入提高 javascript 代码性能/index.html","c6b2aeed0859f53e11079f541e2944bb"],["/post/2014/04/前端冷知识集锦/index.html","b36cf1b5b5fc5b29643892e12b91843e"],["/post/2014/04/用css美化鼠标选中文字/index.html","ab9d1ab6eb942a91f38ddc5fce030236"],["/post/2014/04/高效jquery的奥秘/index.html","54e4bee2a640589f793155d87d43a21a"],["/post/2014/05/Backbone实战教程3/index.html","ad52017aaf5ce3c7b4d0e3a4ce0896f4"],["/post/2014/05/一起来做博客之主题/index.html","e46e252202b49bc709138e818e366cb7"],["/post/2014/05/武当之旅/index.html","cf5d20a0415f8718632a8394ce48bab8"],["/post/2014/07/css3彩色文字和加载动画/index.html","e47276dddc227cb430f0c985d357bd82"],["/post/2014/07/webapp开发经验总结/index.html","c45a4604c181032dba2ee56c1dd53570"],["/post/2014/08/free-over-the-wall-tools-and-mirrors/index.html","693506f41281396a3154c93763c92dfc"],["/post/2014/08/javascript原生函数搜集/index.html","73c923a5b94f9fb65cce4ad8b53c63ec"],["/post/2014/08/javascript的一点东东/index.html","7a33cda09cf5880ceea536d294c4f4ec"],["/post/2014/09/使用requirejs进行模块化开发/index.html","1b275ff8cb748ecc18031a3d5c656e99"],["/post/2014/09/如何对Backbone.Collection进行过滤操作/index.html","2b3615a37a3cc2013d4e7528a1d3f79d"],["/post/2014/09/给console.log加点样式/index.html","924dcc80a46dd5c16c9d811a8bc75013"],["/post/2014/09/靠谱的DNS推荐/index.html","beed8ce66e675de7561c7a19f6b553de"],["/post/2014/10/MarkdownPad注册码/index.html","469351bfe76fa4f1d5432c850f0c921c"],["/post/2014/10/getting-started-with-gulp/index.html","53170db5025cb9c1327a44f6e1075d4d"],["/post/2014/10/github-digitalocean/index.html","0ecebbfd67fd0d43579c3cca8baeb94d"],["/post/2014/10/js表格导出文件/index.html","2179db347a88c5b243283a89e8f6f5b6"],["/post/2014/12/使用cocos2d-js开发h5游戏/index.html","162ef04ceb4e46c52b42249d1cf2613c"],["/post/2015/01/ajax跨域问题解决方案/index.html","d8dbe5e58cecf310d480594b5e90a3d2"],["/post/2015/03/JS混淆加密工具/index.html","29620e2775c2f6e19a0f8a2ad897886e"],["/post/2015/03/抓包神器Fiddler/index.html","4896f4ecc409ec20a5170327acaa604c"],["/post/2015/03/谈谈css居中/index.html","0a11b6ef9d8837fa80fa0e172febd10a"],["/post/2015/06/download-app-in-weixin/index.html","585fc4fd1f847c4d40e8c45740da6617"],["/post/2015/06/iframe-insert-picture-cursor/index.html","afc34d6f01f7a31824519421e98420a2"],["/post/2015/07/config-your-mac-development-environment/index.html","6219f86ea2b4c167b79d350f1713dc0d"],["/post/2015/09/those-common-svn-and-git-commands/index.html","031b237067c23183037aedf4f150bb6b"],["/post/2016/02/angularjs-$apply-$digest-$timeout-$evalAsync/index.html","e470b2e0f16db16d02184f0d41207f26"],["/post/2016/02/mac-iterm2-rz-sz/index.html","bc2202b48e3dfa1f7e2497342cbca84f"],["/post/2016/03/angularjs-dynamic-load-controller/index.html","ada118556439c472528bce7e0b0e59c0"],["/post/2016/03/travisci-hexo-deploy/index.html","e203827b6b11f9f6b62155af247bfd05"],["/post/2017/01/http-security-headers/index.html","84a1f3ef84cbd2ad3f46ec3ee8eb65c8"],["/post/2017/03/homebrew-speed-up/index.html","8c771f8f4628f38222ccaab7c1afb8d8"],["/post/2017/08/digital-ocean-bbr/index.html","649d5bfeb61afdd955b3c19484edcaeb"],["/rss.xml","705663c5640ac27f765eab0ed4ca9b32"],["/sitemap.xml","6ce81ff0be0092db89faf040ac84d16e"],["/software/index.html","fdfab3f8d026b84026c948debfd50de3"],["/tags/angularjs/index.html","86c57c76366aa189c86ec015a7fa05c2"],["/tags/backbone/index.html","a1b0bb380cb3afbdaa3ccf99aeb98d04"],["/tags/cocos2d-js/index.html","d76d3c212b38888ed1bf3fd7090135bc"],["/tags/compass/index.html","c640f55612a6118b8f3135895a0e2e08"],["/tags/css/index.html","8e9437076b3ea1185348a57eb1599701"],["/tags/css3/index.html","616c09b0abcffdff4c90896647f20eff"],["/tags/dns/index.html","ab46ba75cf12de501f8d01c8730513c9"],["/tags/git/index.html","1d2b1c31ac65b5c8b76a640e7884c107"],["/tags/github/index.html","772c86b9d0852132ee4b7e0ad7ef3688"],["/tags/gulp/index.html","a6a42673f4cd6d4301b701fd88e82ca0"],["/tags/hexo/index.html","68fa3c3b390a95f87b014220fba59884"],["/tags/html5/index.html","368ccb63dfdb3c6140aa6a71dcc16d20"],["/tags/http/index.html","292259d424087026b2559ce57c4f7100"],["/tags/index.html","46de2b3ef97d1fd6220b8bf61140c1ef"],["/tags/javascript/index.html","2ed769f2340041c23625c102089ecf33"],["/tags/javascript/page/2/index.html","bb58dcd0d25fa3356969699355e8d2cf"],["/tags/jquery/index.html","d169768ed2d10f3946fbb8ff9202344b"],["/tags/mac/index.html","e3244ed51b91d999f9a7520e20b501d7"],["/tags/markdown/index.html","fc43ca6e2e3bb8d34b6946df772a0ea7"],["/tags/nodejs/index.html","8039534ab4a212f96b6d6cfe5756b302"],["/tags/php/index.html","9946530de796aca514a1691276dbbf5d"],["/tags/phpcms/index.html","9a898687b5dc114c5ccbb23941f9b2b6"],["/tags/sublime/index.html","afc915bc9b1c044e1355a73dd26a7988"],["/tags/svn/index.html","0fb91a804c8cef429f7ee534c47dc10f"],["/tags/vps/index.html","daecaba183c62920d36cdc82b8b71df7"],["/tags/webapp/index.html","92b9ce1a799c3a14cc39bfba92013af3"],["/tags/webstorm/index.html","eb528646551f12bf01f16ca45d969cee"],["/tags/代码编辑器/index.html","49c81a7f89448cd1272d2fec824865e5"],["/tags/博客/index.html","4d3abe50df1a07dd98cc3b56dee43b41"],["/tags/工作/index.html","f3b30118c12faf23161e3a83a3d650f0"],["/tags/旅游/index.html","e245605e363b07dafe42f226f37fc722"],["/tags/网络/index.html","d350a1be42c92043572dfd92c9194fe2"],["/tags/翻墙/index.html","75b5642e42d1bae11c61e83440aa2e89"],["/tools/potatso/index.html","91ed01124dc470b5c74c8ef0d2f8132e"],["/tools/potatso/potatso.512x512.png","35668bd6d7af58a72e0805f42b21961a"],["/tools/potatso/potatso.57x57.png","7333cc48067416366a8e1e5a504fe576"],["/tools/surge/index.html","f259247b1195aee9df996b58cad06002"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







