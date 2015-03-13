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

})();
