"use strict";
let u = require('../build/Release/cryptoforknote');

const b = Buffer.from(
'1717c3b0ecb40661bb2e3f4c03e0feb67a7a48a1739630d157da8b945a0f7de88fd12174073293000000009085dbf70700000060e5d3180000000070aac5495c010000f056e500000000000000000000000000003108edce000000b0254fc09b060000f0f49af4d5000000406eea2ab4000000d079eb28268f000000000000000000000300000000000000ac22ea6b06000000007073910800000050393df8220000000097727e2c00000044189b66000000001efdfe115f5b28a68f373b71720171f844f348676fed7ea239522b64d215af629909b820c571c282826fe024a4a44d3b86aa8848193ca1c3240f2335d971e5f30801ffa9cb6504ae9ecd82d62807ab26cbcc59cbb14ca430ba3a5b0bae8f6fc9f626c43f8989d6922e5e41cb13e503584856e5cb650000f0fbc491809202071ee8bb35868f6fa6c981446d1965e7e2ebbbf8b484858ec5102527f48e74aca303584856e5cb6500000e94ae8f5b070ec031da424efb260e3cbb9fc95aedd4f372a9a71d7b06213b3768fa085bf8d503584856e5cb650000729ceee5040709183028fb4169646a11fa6abacdf95b266c7ed29f8950fc219f215b7ae4f1ea03584856e5cb6500009c5501d1ee9ada2dadb688034c51d7b50ade575d4240628c3ca2f1ec27560f0587411d0211000000000000000000000000000000000001efa3c7bc5a333d0e37729347a844695dafada545f7817cdefbb53ebe624191eb0000000001a08b2344a3ab1756ef88d6d0e37565f114698ac6353b88629e059c74ebdb3bc6'
, 'hex');
const b2 = u.convert_blob(b, 11);
const h1 = b2.toString('hex');

if (h1 === '1717c3b0ecb40661bb2e3f4c03e0feb67a7a48a1739630d157da8b945a0f7de88fd12174073293000000009085dbf70700000060e5d3180000000070aac5495c010000f056e500000000000000000000000000003108edce000000b0254fc09b060000f0f49af4d5000000406eea2ab4000000d079eb28268f000000000000000000000300000000000000ac22ea6b06000000007073910800000050393df8220000000097727e2c00000044189b66000000001efdfe115f5b28a68f373b71720171f844f348676fed7ea239522b64d215af629909b820c571c282826fe024a4a44d3b86aa8848193ca1c3240f2335d971e5f3961bdcdf2cada4fd0f498612e2680fedb0dbe06788ed69e60cfb465366f33f6402') {
  console.log('PASSED');
} else {
  console.log('FAILED: ' + h1);
  process.exit(1);
}
