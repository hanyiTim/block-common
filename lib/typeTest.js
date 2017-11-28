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

module.exports={
    isObject:isObject,
    isArray:isArray,
    isFunction:isFunction,
    isEmtryObject:isEmtryObject
}