function factory(type){
    return function(arg){
        return Object.prototype.toString.call(arg) == `[object ${type}]`;
    }
}
var isObject = factory('Object'),
    isArray = factory('Array'),
    isFunction = factory('Function');


function isEmtryObject(obj){
    if(!obj || !isObject(obj)){
        obj = {};
    }
    for (key in obj) {
        return false;
    }
    return true
}

function setCookie(name,value,day){
    var exp = new Date(),
        day =!isNaN(day) ? day : 1;

    exp.setTime(exp.getTime() + day * 60 * 60 * 1000);//有效期1小时 
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
　　if (arr != null)
　　　　return unescape(arr[2]);
　　return null;
}

function deleteCookie(name, ) {
  　　setCookie(name, '', -1);
}

function fnGetTime(str, format) {
    str = parseInt(str);
    var D = false;
    if (isNaN(str)) {
        D = new Date();
    }
    else {
        D = new Date(str);
    }
    var ret = "";
    if (D && !isNaN(D.getTime())) {
        var fullyear = D.getFullYear();
        var month = D.getMonth() + 1;
        var date = D.getDate();
        var hours = D.getHours();
        var minute = D.getMinutes();
        var second = D.getSeconds();
        var doublemonth = month > 9 ? month : "0" + month;
        var doubledate = date > 9 ? date : "0" + date;
        var doubleyear = fullyear.toString().substr(2);
        var doublehours = hours > 9 ? hours : "0" + hours;
        var doubleminues = minute > 9 ? minute : "0" + minute;
        var doublesecond = second > 9 ? second : "0" + second;
        ret = format;
        ret = ret.replace(/YYYY/g, fullyear);
        ret = ret.replace(/YY/g, doubleyear);
        ret = ret.replace(/mm/g, doublemonth);
        ret = ret.replace(/m/g, month);
        ret = ret.replace(/dd/g, doubledate);
        ret = ret.replace(/d/g, date);
        ret = ret.replace(/hh/g, doublehours);
        ret = ret.replace(/h/g, hours);
        ret = ret.replace(/ii/g, doubleminues);
        ret = ret.replace(/i/g, minute);
        ret = ret.replace(/ss/g, doublesecond);
        ret = ret.replace(/s/g, second);
    }
    return ret;
}

function objectAssign(obj1,obj2){
    if(Object.assign && Object.assign.call){
        obj1=Object.assign(obj1,obj2);
    }else{
        for(var k in obj2){
            if(isObject(obj2[k])){
                obj2[k] = objectAssign(obj1[k],obj2[k]);
            }
            else{
                obj1[k] = obj2[k];
            }
        }
    }
    return obj1;
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}

module.exports = {
    isObject:isObject,
    isArray:isArray,
    isFunction:isFunction,
    isEmtryObject:isEmtryObject,
    setCookie:setCookie,
    getCookie:getCookie,
    deleteCookie:deleteCookie,
    objectAssign:objectAssign,
    fnGetTime:fnGetTime,
    getQueryString:getQueryString
}