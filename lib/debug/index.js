var util = require('../util/index.js');



window.debug = util.getQueryString("debug") || util.getCookie('debug') || false;


/**
 * [log 日志打印]
 * @return {[type]} [description]
 */
function log() {
    var arr = Array.prototype.slice.call(arguments);
    for (var i = 0; i < arr.length; i++) {
        if (!util.isFunction(arr[i]) && (util.isObject(arr[i]) || util.isArray(arr[i]))) {
            try{
                arr[i] = JSON.stringify(arr[i]);
            }
            catch(e){
                console.log(e);
            }
            
        }
    }
    if (window.debug) {
        setTimeout(function(){
            alert(arr.join('-----------------------------------\n'));
        },10)
    } else {
        console.log(arr.join('-----------------------------------\n'));
    }
}


/**
 * [debugTarget debug模式开关]
 * @return {[type]} [description]
 */
function debugTarget(){
    this.bindEvent();
}
debugTarget.prototype = {
    debugStart:window.debug,
    clicks:0,
    openDebug:function(){
        //cookie 有效期 十分钟，防止cookie 影响
        util.setCookie('debug',true,10/60);
        window.debug = true;
    },
    closeDebug:function(){
        util.deleteCookie('debug');
        window.debug = false;
    },
    triggerDebug:function(){
        var self = this;
        console.log("triggerDebug",window.debug);
        if(window.debug){
            self.closeDebug();
        }else{
            self.openDebug();
        }
    },
    bindEvent:function(){
        var $_body = document.body,
            timer = null,
            self = this;
        $_body.addEventListener("touchstart",function(event){
            clearTimeout(timer);
            console.log(self.clicks);
            if(self.clicks >= 7){
                self.triggerDebug();
                self.clicks = 0;
            }else{
                self.clicks++;
                timer = setTimeout(function(){
                    self.clicks = 0;
                },200)
            }
        },false);
    }
}

var debugTarget_init = new debugTarget();

module.exports={
    log
}