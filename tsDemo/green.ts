var clone = function (obj) {
    if (obj == null || typeof (obj) != 'object') { return obj }
    var temp = new obj.constructor();
    for (var key in obj) { temp[key] = clone(obj[key]) }
    return temp;
}
export var duplicatePromiseCombine = function () {
    var pendings = {}
    /**
     * @param {Function} promiseFn 原始的 promise 方法
     * @param {Function} keyGenFn 相同的 promise 通过该方法应该返回相同的 key
     * @return {Function} 可合并相同 key promise 的方法
     * @author justanzhu
     */
    return function (promiseFn, keyGenFn) {
        return function () {
            var key = keyGenFn.apply(null, arguments)
            if (pendings[key]) {
                return pendings[key].then(function (data) {
                    // 某个回调可能直接修改该数据
                    return clone(data)
                })
            } else {
                pendings[key] = promiseFn.apply(this, arguments)

                return pendings[key].then(function (data) {
                    delete pendings[key]
                    return data
                }, function (err) {
                    delete pendings[key]
                    throw err
                })
            }
        }
    }
}()
interface a {
    b(url, param, opts?: any): any
}
function c() { }
const request: (url, params, opts?: any) => any = duplicatePromiseCombine(1, 2)
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};