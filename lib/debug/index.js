var util = require('../util/index.js');



window.debug = util.getQueryString("debug") || util.getCookie('debug') || false;


/**
 * [log 日志打印]
 * @return {[type]} [description]
 */
function log() {
    var arr = Array.prototype.slice.call(arguments);
    for (var i = 0; i < arr.length; i++) {
        if (!isFunction(arr[i]) && (isObject(arr[i]) || isArray(arr[i]))) {
            try{
                arr[i] = JSON.stringify(arr[i]);
            }
            catch(e){
                console.log(e);
            }
            
        }
    }
    if (window.debug) {
        alert(arr.join('-----------------------------------\n'));
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
        util.setCookie('debug',true);
        window.debug = true;
    },
    closeDebug:function(){
        util.deleteCookie('debug');
        window.debug = false;
    },
    triggerDebug:function(){
        var self = this;
        if(window.debug){
            self.closeDebug();
        }else{
            self.openDebug();
        }
    },
    bindEvent:function(){
        var $_body = document.body,
            timre = null,
            self = this;
        $_body.addEventListener("touchstart",function(event){
            clearTimeout(timer);
            if(clicks == 7){
                self.triggerDebug();
            }else{
                clicks++;
                timer = setTimeout(function(){
                    clicks = 0;
                },600)
            }
        },false);
    }
}

var debugTarget_init = new debugTarget();
debugTarget_init();

module.exports={
    log:log
}