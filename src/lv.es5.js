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
        //执行n次fn
        times(fn, n) {
            if(typeof n !=="number"){
                throw TypeError("请输入数字作为想要执行的次数");
            }
            return ()=> {
                if (--times > 0) {
                    if (typeof fn == 'function')
                        return fn.apply(this, arguments);
                }
                if (times < 1) return undefined;
            };
        }
};
