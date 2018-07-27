function Browser(testUa){
    var ua = testUa || "",
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
        isLizhi,
        envInfo,
        phoneModel;
    // if(window && window.navigator){
    //     ua = window.navigator.userAgent.toLocaleLowerCase();
    // }
    isIos = ()=>{ return /mac\s+os\s+x/gi.test(ua); };
    isAndroid = () => { return  /android/gi.test(ua); };
    isIphone = () => { return  /iphone/gi.test(ua); };
    isIpad = () => { return  /ipad/gi.test(ua); };
    isLizhi = () => { return  /lizhi/gi.test(ua); };
    isWeixin = () => { return  /micromessenger/gi.test(ua); };
    isWeibo = () => { return  /weibo/gi.test(ua); };
    isUc = () => { return  /ucbrowser/gi.test(ua); };

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