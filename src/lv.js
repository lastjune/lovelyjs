'use strict';
/**
 * lovely.js
 * personal useful javascript library
 * gathering the most useful function code for sharing
 * @author Timiz Qi
 * @date 2016年1月4日 星期一
 */
export var lv ={
    const argToArray=(arg)=>{
        return (arg.length===1?[arg[0]]:[].apply(null,arguments))||[];
    },
    //mixin
    const mixin=(target,source)=>{
        //todo
    },
    const isPrime=(n)=> {
        if (typeof Number(n) !== 'number'||n===void 0) {
            throw 'The stdin is NaN.';
        }
        return n < 2 ? false : !/^(11+?)\1+$/.test(Array(n + 1).join('1'));
    },
    //sort an array by the reg expression or default by number
    const sortByReg=(arr, reg)=> {
        var defaultReg = /\d/;
        if (reg) {
            defaultReg = reg;
        }
        return arr.sort(function(a, b) {
            return a.match(defaultReg) - b.match(defaultReg);
        });
    },
    //reflection of the function parameter list
    const getParams=(func)=> {
        var fnStr = func.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '');
        return fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([^\s,]+)/g) || [];
    },
    //delegateFunc
    const delegateFunc=(func,params)=>{
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
