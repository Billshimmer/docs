# React数据流管理

> 前端React开发针对的数据流管理使用比较广泛的是mobx && redux;

# 回顾一下mobx和redux

>mobx
![avatar](http://cn.mobx.js.org/flow.png)
redux<br/>
![avatar](https://gw.alicdn.com/tps/TB1SsWQLFXXXXXMXVXXXXXXXXXX-1170-514.jpg_600x600.jpg)

# 两个框架的异同之处

## 相似

>   两个框架都把将数据从单纯的components state中剥离出来，形成独立的store来管理。

>   框架都提供了单独的actions封装来帮助管理store的更新机制。

>   组件通过观察者模式来通知数据的更新，通过store的接口来获取当前数据。

## 差异

>   虽然形成独立的store管理，但是mobx倾向于多个store源分别管理数据，redux则汇总成一个总的store管理

>   通过actions封装来改变，但是改变之后的数据却差异很大，因为在redux中每一次action的改变是immutable的(就是每次都遵从返回新的数据)，相反的是mobx其实不关心数据是否为新，仅仅监听当前store中的数据。

>   store中的数据更新，在redux和mobx中可以通过订阅通知的方式来获取到，但是具体实现的话，mobx是通过劫持getter setter实现， redux则是通过收集actions的触发来做到。

##  简而言之

>   从上述的各种差同来看，redux管理数据更加中心化，数据管理可读性更高，整体设计是函数式变成和不可变数据源，所以我们在代码编写上有更多的开发量；mobx的概念很简单易懂，只需要独立出store，将自己的数据改变动作包装成actions，整体设计是响应式。


## 回归实践代码理解redux和mobx

### redux
>![avater](http://yun.dui88.com/F4C81935-034F-4660-A25A-1A4739CDFA17.png)
![avatar](http://yun.dui88.com/A68FCFC9-EBFB-450D-888A-B916557FD887.png)
![avatar](http://yun.dui88.com/CF06FF44-FFA6-4D22-83D3-3548A7F8468F.png)

### mobx
>![avater](http://yun.dui88.com/A3E82219-F611-4435-80BA-6B7150B33C28.png)

### 参考文章和技术blog

#### [Redux 还是 Mobx](https://segmentfault.com/a/1190000011148981)
#### [Flux vs Redux vs MobX](http://zhenhua-lee.github.io/react/state-manage.html)
#### [Rudexer使用Mobx的初体验](https://medium.com/@adamrackis/a-redux-enthusiast-tries-mobx-af675f468c11)

