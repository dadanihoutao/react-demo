# react-demo
搭建react项目


#### 项目启动
```
npm run dev
```

#### 打包生产环境
```
npm run build
```

#### 打包测试环境
```
npm run build-test
```

#### 版本问题
这个项目使用的是react 比较高的版本，
里边用到了很多react 的新特性，比如生命周期方法已经更改为
```javascript
componentWillMount → UNSAFE_componentWillMount
```
如果安装好依赖后浏览器控制台出现警告 提示 componentWillMount 已经废弃，使用 UNSAFE_componentWillMount 新版生命周期函数，参考下边文章进行修改
#### [react中项目componentWillMount警告](https://blog.csdn.net/HarryHY/article/details/104153011?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6)
##### [\[译\]React v16.9 新特性](https://blog.csdn.net/lunahaijiao/article/details/99619460?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1)

如果还是不行，node_modules 目录下找到 react-loadable 安装包, 找到 /react-loadable/libs/index.js 中搜索 componentWillMount 替换成 UNSAFE_componentWillMount

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

# 未完成
rem 适配方法没搞
https://www.cnblogs.com/hss-blog/p/11362900.html

rem.less 文件先放进来，但是估计不行，用的 640 的设计稿 适配 100px = 1rem

打包的时候 使用 CND 引入资源文件还没搞



