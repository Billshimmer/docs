# react-native 实践总结

> 当前客户端技术栈，总共分为native或者hybird混生开发或者直接套壳webview开发一套spa应用

## rn good items
> 1. 页面搭建快速,多路由联动快速
> 2. 热更新可以快速迭代版本
> 3. 视图渲染引擎依赖于native模块，优于webview的spa
> 4. 开发语言和成本一般
> 5. 基本react底层类库的组件开发灵活强大

## rn bad items
> 1. 原生开发依赖严重(硬件类调用)
> 2. 对于动画开发捉急,大量细腻的动画和手势处理在js中调用起来比较粗糙
> 3. 对于应用单方面的定制化需求难以触及: 例如webview定制; 语音模块; 多线程开场景下处理棘手


# 个人项
> 以我自己的要求更加倾向于原生开发，毕竟开发出来的东西更加细腻好玩，不过市场毕竟有很多对界面和交互要求都不是很高，比较渴求生产效率的开发需求，各自方向不同，带来的效果和出发点也会各异。