# React数据流管理

> 前端React开发针对的数据流管理使用比较广泛的是mobx && redux;

# 回顾一下mobx和redux

>mobx
![avatar](http://cn.mobx.js.org/flow.png)
redux<br/>
![avatar](https://gw.alicdn.com/tps/TB1SsWQLFXXXXXMXVXXXXXXXXXX-1170-514.jpg_600x600.jpg)

# 两个框架的异同之处

## 相似

> 两个框架都把将数据从单纯的components state中剥离出来，形成独立的store来管理。

> 框架都提供了单独的actions封装来管理store的更新机制。

> 组件可以通过观察者模式来通知数据的更新，通过store的接口来获取当前数据。

## 差异

> 虽然形成独立的store管理，但是mobx倾向于多个store源分别管理数据，redux则汇总成一个总的store管理

> 通过actions封装来改变，但是改变之后的数据却差异很大，因为在redux中每一次action的改变是immutable的(就是每次都遵从返回新的数据),相反的是mobx其实不关心数据是否为新，仅仅监听当前的数据。

> store中的数据更新，在redux和mobx中可以通过订阅通知的方式来获取到，但是具体实现的话，mobx是通过劫持getter setter做到, redux