'use strict';
/**
 * lovely.js
 * personal useful javascript library
 * gathering the most useful function code for sharing
 * @author Timiz Qi
 * @date 2016年1月4日 星期一
 */
export let lv = {
    // 判断n是否为素数
    isPrime(n) {
        if(n===void 0){
            throw 'No input.';
        }
        if (typeof Number(n) !== 'number') {
            throw 'The stdin is NaN.';
        }
        return n < 2 ? false : !/^(11+?)\1+$/.test(Array(n + 1).join('1'));
    },
    //sort an array by the reg expression or default by number
    sortByReg(arr, reg) {
        var defaultReg = /\d/;
        if (reg) {
            defaultReg = reg;
        }
        return arr.sort(function(a, b) {
            return a.match(defaultReg) - b.match(defaultReg);
        });
    },
    //reflection of the function parameter list
    getParams(func) {
        var fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
    },
    //delegateFunc
    delegateFunc(func,params){
        if (!params) return func;
        var paramNames = this.getParams(func);
        var f = function () {
            var args = [].slice.call(arguments);
            return func.apply(null,args.concat(paramNames.map(function(p) {return params[p];}).slice(args.length)));
        };
        f.getParams = function () { return paramNames; };
        return f;
    }
};
