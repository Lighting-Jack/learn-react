# learn-react

> 参考

	1. https://juejin.im/post/5a84682ef265da4e83266cc4 - react源码解读
	2. http://cn.redux.js.org/ - redux入门
	3. https://www.cnblogs.com/rubylouvre/archive/2009/08/08/1541578.html - js-aop的实现
	4. https://stackoverflow.com/questions/45652381/what-purpose-does-makeemptyfunction-serve-in-fbjs - js-noop缺陷及解决思路，参考objectC/Coca编程思想
	5. https://github.com/facebook/react/issues/8559 - react15.x下的一个bug，在16.x解决了
	6. https://zhuanlan.zhihu.com/p/20346379 - react dom diff算法原理
	7. https://blog.csdn.net/qq_33642117/article/details/51926634 - interface&implements简介
	8. https://www.jianshu.com/p/9873d4ccb891 - redux-connect原理
	9. https://www.jianshu.com/p/ef6269d9d75a - redux-provider原理
	10. https://www.cnblogs.com/wilber2013/p/5403350.html - 了解react-redux重要概念
	11. https://cn.redux.js.org/ - redux中文文档（gitbook）
	12. https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ - 函数编程范式
## react源码解读
1. react组件初始化、挂载
2. react生命周期
3. react事务机制、更新机制
4. react事件系统
5. react dom diff算法原理

## redux
1. redux核心思想

2. 与flux对比
flux：(state,action)=>state

3. reducer => 与array.prototype.reduce(reducer, initialValue)中的回调函数是相同类型
    ```
    /**
     * @param {number} accumulator 累加器回调返回值
     * @param {number} currentValue 当前遍历元素的值
     * @param {number} currentIndex 当前遍历元素的索引值
     * @param {array} array 当前调用的数组
     */
    reducer(accumulator, currentValue, currentIndex, array)

    ```
4. 严格的单向数据流；自上而下
	state只读；易控制和调试
	只能通过action改变state；在reducer直接修改state不会触发redux-listening，redux会认为没有更新

5. 当触发action后，combineReducers返回的todoApp负责调用两个reducer
```
let nextTodos = todos(state.todos, action)
let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)
```

6. subscribe（fn） 作为dispatch的回调，订阅是把fn推入队列中，在每一次dispatch之后执行队列中的所有任务

7. 展示组件&容器组件；
* 展示组件负责ui展示，可维护一套自己的state，数据来源于props；
* 容器组件负责业务逻辑，与redux交互，并把props进行传递，数据来源于props.store或context.store

8. 异步action-中间件

9. redux-connect、provider原理

10. redux-state范式化，要把store看成数据库，redux-orm了解一下

11. reducer复用；高阶reducer-一个接收reducer函数为参数，并返回一个新的reducer的函数
通过action特殊字段或type前后缀->reducer生成器->reducer通用过滤器
```
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}
function createNamedWrapperReducer(reducerFunction, reducerName) {
    return (state, action) => {
        const {name} = action;
        const isInitializationCall = state === undefined;
        if(name !== reducerName && !isInitializationCall) return state;

        return reducerFunction(state, action);    
    }
}
```

12. 不可变更新模式；reducer应该返回新的引用类型，避免在原有的基础上修改

13. 初始化state
* preloadState，不使用combineReducer时，都是优先于es6默认参数，es6默认参数会失效
* es6默认参数/reducer显式判断并设置初始值

14. actionCreator生成器

15. applyMiddleWare、createStore、thunkMiddleWare原理 - array.prototype.reduce

## demo
1. [counter](https://github.com/Lighting-Jack/learn-react/tree/master/counter)

## 本地开发
1. create-react-app;react开发脚手架，集成所有所需包括webpack-server
2. webpack+babel;可正常使用es6的模块写法，甚至es7的语法
3. 脚本引入react、reactDOM、redux(npm包redux/dist/redux.js符合umd规范)、browserify;动态编译脚本（生产环境慎用！）

## 疑问
1. "和 Flux 的另一个重要区别，是 Redux 设想你永远不会变动你的数据。你可以很好地使用普通对象和数组来管理 state ，而不是在多个 reducer 里变动数据。正确且简便的方式是，你应该在 reducer 中返回一个新对象来更新 state"
2. 函数式编程；函数柯里化（多参函数变为单参函数）
3. rxjs与redux？
4. 无状态函数；只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算
