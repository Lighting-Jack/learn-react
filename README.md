# learn-react
>参考
	1. https://juejin.im/post/5a84682ef265da4e83266cc4 - react源码解读
  

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
4. 严格的单向数据流、state只读、只能通过action改变state

5. 当触发action后，combineReducers返回的todoApp负责调用两个reducer
```
let nextTodos = todos(state.todos, action)
let nextVisibleTodoFilter = visibleTodoFilter(state.visibleTodoFilter, action)
```

6. subscribe（fn） 作为dispatch的回调，每一次订阅都是把fn推入队列中，在dispatch之后执行队列中的所有任务

7. 展示组件&容器组件；展示组件负责ui展示，可维护一套自己的state，数据来源于props；容器组件负责与redux交互，并把props进行传递，数据来源于store

## demo
1. counter

## 本地开发
1. create-react-app;react开发脚手架，集成所有所需包括webpack-server
2. webpack+babel;可正常使用es6的模块写法，甚至es7的语法
3. 脚本引入react、reactDOM、redux(npm包redux/dist/redux.js符合umd规范)、browserify;动态编译脚本（生产环境慎用！）

## 疑问
1. "和 Flux 的另一个重要区别，是 Redux 设想你永远不会变动你的数据。你可以很好地使用普通对象和数组来管理 state ，而不是在多个 reducer 里变动数据。正确且简便的方式是，你应该在 reducer 中返回一个新对象来更新 state"
2. 函数式编程；函数柯里化（多参函数变为单参函数）
3. rxjs与redux？
4. 无状态函数；只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算
