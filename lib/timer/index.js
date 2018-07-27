/**
 * [formatTimeStamp 时间格式化转换]
 * @param  {[Number]} str    [时间戳]
 * @param  {[String]} format [时间格式，[YY|YYYY]年 [mm|m]月 [dd|d]天 [hh|h]时 [ii|i]分 [ss|s]秒]
 * @return {[type]}        [description]
 */
function formatTimeStamp(str, format) {
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
        ret = `${format}` || "";
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
function compter(second,utils,noun) {
    let arr = [],
        numStr = parseInt(second / utils[0]) < 10 ? `0${parseInt(second / utils[0])}`:parseInt(second / utils[0]);
    arr.push(numStr);
    let num = second % utils[0];
    noun = noun || " ";
    if (num >= 0 && utils.slice(1).length > 0) {
        arr.push(compter(num,utils.slice(1),noun))
    }
    return arr.join(noun);
}
function countDown(endTimeStamp,noun){
    var now = new Date();
    var result = null;
    if (endTimeStamp && endTimeStamp > now.getTime()) {
        var utils = [60 * 60, 60, 1];
        var time_diff = parseInt((endTimeStamp - now.getTime()) / 1000);
        result = compter(time_diff,utils,noun);
    }
    return result;
}

module.exports = {
    formatTimeStamp,
    countDown
}