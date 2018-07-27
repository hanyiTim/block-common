const browser = require('./index.js');
const expect = require('chai').expect;

const ua = {
    iosUa: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    androidUa:"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Mobile Safari/537.36",
    weixinUa:"mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0",
    ucUa:"NOKIA5700/UCWEB7.0.2.37/28/999"
}
describe('测试browser',()=>{
    it('isIos',()=>{
        expect(browser.isIos(ua.iosUa));
    });
    it('isAndroid',()=>{
        expect(browser.isAndroid(ua.androidUa));
    });
    it('isIphone',()=>{
        expect(browser.isIphone(ua.iosUa));
    });
    it('isWeixin',()=>{
        expect(browser.isWeixin(ua.weixinUa));
    });
    it('isUc',()=>{
        expect(browser.isUc(ua.ucUa));
    });
})
