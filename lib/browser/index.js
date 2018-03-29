function Browser(){
    var ua = window.navigator.userAgent.toLocaleLowerCase(),
        result=null,
        isIos,
        isAndroid,
        isIpad,
        isIphone,
        isWeixin,
        isQQ,
        isUc,
        isSafari,
        isWeibo,
        isLizhi;
    isIos = /mac\s+os\s+x/gi.test(ua);
    isAndroid = /android/gi.test(ua);
    isIphone = /iphone/gi.test(ua);
    isIpad = /ipad/gi.test(ua);
    isLizhi = /lizhi/gi.test(ua);
    isWeixin = /micromessenger/gi.test(ua);
    isWeibo = /weibo/gi.test(ua);
    isUc = /ucbrowser/gi.test(ua);
    return {
        isIos,
        isAndroid,
        isIphone,
        isIpad,
        isLizhi,
        isWeixin,
        isUc,
        isWeibo
    }
}
const browser = Browser();
module.exports = {
    ...browser
}