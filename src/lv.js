'use strict';
/**
 * lovely.js
 * personal useful javascript library
 * gathering the most useful function code for sharing
 * @author Timiz Qi
 * @date 2016年1月4日 星期一
 */
module.exports={
    argToArray(arg) {
            return (arg.length === 1 ? [arg[0]] : [].apply(null, arguments)) || [];
        },
        //mixin
        mixin(target, source) {
            //todo
        },
        isPrime(n) {
            if (typeof Number(n) !== 'number' || n === void 0) {
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
        delegateFunc(func, params) {
            if (!params) return func;
            var paramNames = this.getParams(func);
            var f = function() {
                var args = [].slice.call(arguments);
                return func.apply(null, args.concat(paramNames.map(function(p) {
                    return params[p];
                }).slice(args.length)));
            };
            f.getParams = function() {
                return paramNames;
            };
            return f;
        },
        selectionSort(ary) {
            if (!Array.isArray(ary)) {
                throw TypeError('The input is not Array object.', 'lv.js', '55');
            }
            let aLen = ary.length;
            for (var i = 0; i < aLen - 1; i++) {
                let min = i;
                for (var j = i + 1; j < aLen; j++) {
                    if (ary[j] < ary[min]) {
                        min = j;
                    }
                }
                if (min !== i) {
                    let temp = ary[min];
                    ary[min] = ary[i];
                    ary[i] = temp;
                }
            }
            return ary;
        },
        insertionSort(ary) {
            var aLen = ary.length;

            if (aLen < 2) {
                return ary;
            }
            for (var i = 1; i < aLen; ++i) {
                console.log(`i is ${i}`)
                var j = i;
                var value = ary[i];
                while (j > 0 && ary[j - 1] > value) {
                    ary[j] = ary[j - 1];
                    --j;
                }
                if (j !== i) {
                    ary[j] = value;
                }
            }
            return ary;
        }
};
