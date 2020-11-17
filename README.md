# react-demo
搭建react移动端项目


#### 项目启动
```
npm run dev
```

#### 打包测试环境
```
npm run build-test
```

#### 打包生产环境
```
npm run build
```

#### 技术栈
- react
- react-router
- redux
- axios
- antd-mobile
- less
- eslint
- post-css

> **使用 eslint 自动检测代码格式，项目开发热更新，组件按需加载，css样式前缀自动补全，iconfont 使用阿里巴巴矢量图标库**

> **字体文件使用iconfont 图标库的 CDN 引入：直接复制 .js .css CDN链接放入根目录下index.html文件对应位置**

#### rem 适配使用插件  基于 750px 的设计稿
- [amfe-flexible](https://www.npmjs.com/package/amfe-flexible)
- [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem)

> **使用： 直接按照 750px 设计稿上的 px 单位写样式就可以，postcss-pxtorem 插件会自动转换成对应的rem单位**

#### 根目录下 /config目录项目配置文件说明
```
cdn.js  // 环境变量配置文件，区分： 开发、测试、生产

cdn.js  // 项目中 CDN 静态资源链接
```

#### 浏览器警告提示 版本问题
这个项目使用的是react 比较高的版本，
里边用到了很多react 的新特性，可以使用react hook

如果安装好依赖后浏览器控制台出现警告 提示 componentWillMount 已经废弃，使用 UNSAFE_componentWillMount 新版生命周期函数，参考下边文章进行修改
#### [react中项目componentWillMount警告](https://blog.csdn.net/HarryHY/article/details/104153011?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6)
##### [\[译\]React v16.9 新特性](https://blog.csdn.net/lunahaijiao/article/details/99619460?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1)


如果还是不行，node_modules 目录下找到 react-loadable（组件按需加载插件） 安装包, 找到 /react-loadable/libs/index.js 中搜索 componentWillMount 替换成 UNSAFE_componentWillMount

```
// 166 行
LoadableComponent.prototype.componentWillMount = function componentWillMount() {
  this._mounted = true;
  this._loadModule();
};

// 替换成
LoadableComponent.prototype.UNSAFE_componentWillMount = function componentWillMount() {
  this._mounted = true;
  this._loadModule();
};
```


