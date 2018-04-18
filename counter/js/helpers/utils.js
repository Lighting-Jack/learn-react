// fix for js-noop
function emptyFunction() { }

/**
 * AOP系统
 * @param {*} target 切入点
 * @param {*} before 前置函数
 * @param {*} after 后置函数
 * 
 * @目前暂时没加入环绕函数
 */
const AopProxyMixin = function (target, before, after) {
    if (!typeof target === "function") throw Error("切入点必须为函数");
    const beforeFn = typeof before === "function" ? before : emptyFunction
    const afterFn = typeof after === "function" ? after : emptyFunction
    return function () {
        beforeFn(...arguments)
        target(...arguments)
        afterFn(...arguments)
    }
}

// 通用工具类
const utils = {
    // 首字母大写
    titleCase(string) {
        if (typeof string !== "string") throw Error("First arguments of titleCase must be String")
        const tmpS = string.toLowerCase(),
            length = tmpS.length;
        return length ? tmpS[0].toUpperCase() + tmpS.slice(1) : tmpS;
    },
    /**
     * 美化log
     * @param {*} cmd 命令
     * @param {*} modifier 修饰符
     * @param {*} ele 内容/值
     */
    log(cmd = "", modifier = "", ele) {
        const type = typeof ele;
        let jsonContent;
        if (type === "object") {
            jsonContent = ele;
            ele = ""
        } else {
            jsonContent = "";
            ele = ele || ""
        }
        console && console.log(`%c${this.titleCase(cmd)}%c${this.titleCase(modifier)}%c${ele}`, "background:grey;font:14px/20px '黑体';text-align:center;padding:0 10px;color:white;display:block;border-radius:40px 0 40px 0", "background:orange;border-radius:40px 0 40px 0;padding: 0 10px", "background:green;border-radius:40px 0 40px 0;padding: 0 10px;color:white", jsonContent)
    }
}

module.exports = {
    AopProxyMixin: AopProxyMixin,
    utils: utils
}