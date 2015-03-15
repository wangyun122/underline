(function () {

    //建立根对象
    var root = this;

    //将预先的变量保存在__中
    var previousUnderline = root.__;

    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    //可以快速调用一下方法
    var
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty;

    //ECMAScript native function
    var
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create;

    var Ctor = function () {
    };

    var __ = function (obj) {
        if (obj instanceof __) return obj;
        if (!(this instanceof __)) return new __(obj);
        this._wrapped = obj;
    }

    if(typeof exports !=='undefined'){
        if(typeof module !== 'undefined' &&  module.exports){
            exports=module.exports=__;
        }
        exports=__;
    }else{
        root.__=__;
    }

    __.VERSION='1.8.2';

    var optimizeCb= function (func,context,argCount) {
        if(context===void 0)return func;
        switch (argCount == null ? 3 : argCount) {
            case 1: return function(value) {
                return func.call(context, value);
            };
            case 2: return function(value, other) {
                return func.call(context, value, other);
            };
            case 3: return function(value, index, collection) {
                return func.call(context, value, index, collection);
            };
            case 4: return function(accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
        }
        return function () {
            return func.apply(context,arguments);
        }
    }

    var cb= function () {

    }

    var createAssigner= function () {

    }

    var baseCreate= function () {

    }

    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var isArrayLike = function(collection) {
        var length = collection != null && collection.length;
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };


    __.each= __.forEach=function (obj,iteratee,context) {
        iteratee=optimizeCb(iteratee,context);
        var i,length;
        if(isArrayLike(obj)){
            for(i=0,length=obj.length;i<length;i++){
                iteratee(obj[i],i,obj);
            }
        }else{
            var keys= _.keys(obj);
            for(i=0,length=keys.length;i<length;i++){
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    }
})();
