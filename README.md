## A demo app for coreFE

- A demo BO app based on coreFE

## 组件库

项目使用 pro component 进行开发

## 接口

- 项目中所有的接口使用 Apifox 进行 mock
- 新增商品接口随机成功或者失败
- 商品 filter 逻辑使用 Apifox mock 脚本进行模拟

## 一些思考与总结

CoreFE 做了什么？解决了什么问题

集成了状态管理、路由、log/event handler 的 React 前端项目脚手架，但是不包括构建工具

要点：

- 基础模块封装(Module)，包括对常见页面生命周期场景的约束(onEnter 等)以及常用功能的封装 pushHistory、setState 等
- 模块的 redux state 按照提供的 namespace 自动注册到 global state context
- 所有的模块会在 app 初始化时被注册, 即 register 函数 (如果重构到自动注册会更好？)
- 模块的注册顺序从 RootModule 开始，后面按 import 执行顺序依次注册
- 模块之间通过 global state(this.rootState)共享数据
- 多个页面可以共享一个 module,一个页面不能使用多个 module
- 提供了模块懒加载的工具函数 async
- 提供封装了 axios 网络请求的工具函数 ajax
- …待续

所以，基于 coreFE 可以快速搭建一个企业级的前端应用，开发者不需要再做状态管理、状态消费、网络请求、event log 收集等基础功能的封装，可以更专注于业务逻辑的开发，同时，框架提供的接口、hooks 等有意的去约束了项目的开发规范，包括文件目录的结构规则、UI 与业务逻辑分离等。
