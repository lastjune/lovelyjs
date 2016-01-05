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
        }
};
