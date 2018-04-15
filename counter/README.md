counter # 计数器demo
├── README.md
├── image # 图片
├── index.html # 入口文档
├── js # 脚本
│   ├── actions # actionCreators
│   │   └── index.js
│   ├── components # 展示组件
│   │   ├── helloGrandSon.js
│   │   ├── helloSon.js
│   │   └── helloSon2.js
│   ├── container # 容器组件
│   │   └── app.js
│   ├── dest # 生产文件
│   │   ├── bundle.js # 生产文件用这个就可以
│   │   ├── compile.js
│   │   └── compile.js.map
│   ├── helpers # 辅助函数
│   │   └── utils.js
│   ├── index.js
│   ├── reducers # 累加器
│   │   └── rootReducer.js # 顶层合并后的累加器
│   │   └── reducers.js # 各种累加器
│   └── store # 初始化store
│       └── createStore.js
└── webpack # 构建工具
    └── webpack.config.js
