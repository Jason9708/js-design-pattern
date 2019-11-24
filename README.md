# js-design-pattern
JavaScript设计模式讲解+应用


### 面向对象
#### 三要素
-   继承：子类继承父类
    -   父类是公共的，不仅仅只服务于一个子类
    -   继承可以将公共方法抽离出来，提高复用性，减少冗余
-   封装：数据的权限和保密（`Javascript`,甚至`Es6`本身都没有封装这个概念，但`Typescript`可实现封装）
    -   关键字（定义属性/方法）
        -   `public` 完全开放
        -   `protected` 对子类开放
        -   `private` 对自己开放
    - 特点
        - 减少耦合，不该暴露的不暴露
        - 利于数据，接口的权限管理
        - Es不支持，我们可以去约定某种形式（ _ 开头）去告诉合作者这是private类型
-   多态：同一接口不同实现
    -   Js对于多态的应用极少，因为需要结合Java等语言的接口，重写，重载等功能
    -   未来Ts的大范围普及，多态的功能也会更加显著
    - 特点
        - 保持子类的开放性和灵活性
        - 面向接口编程（Js使用较少）

#### Js应用举例
**`JQuery`就是一个class，而`${'p'}`就是`JQuery的一个实例`**
```
class JQuery {
    constructor(selector) {
            let slice = Array.prototype.slice
            let dom = slice.call(document.querySelectorAll(selector)) // 获取每一个dom元素
            let len = dom ? dom.length : 0
            for (let i = 0; i < len; i++) {
                this[i] = dom[i]
            }
            this.length = len
            this.selector = selector || ''
        }
        // JQuery自身API
    append(node) {
        // TODO
    }
    addClass(name) {
        // TODO
    }
    html(data) {
            // TODO
        }
        // ...
}

window.$ = function(selector) {
    return new JQuery
}
```
```
使用
var $p = $('p')
$p.append(xxx)
```

#### 为何要使用面向对象
- 面向对象是为了解决系统的可维护性，可扩展性，可重用性
- 面向对象实现了一种数据的结构化，是为了表述、模拟世间万事
- 面向对象的意义是将平整的数据进行结构化。对于计算机而已，结构化才是最简单的、
- 编程应该做到 简单 & 抽象
```
好处：
当需求单一，或者简单时我们一步一步操作没有问题，并且效率也挺高。可随着需求的更改，功能的增多，发现于鏊面对每一个步骤很麻烦了，这时就开始思索能不能把步骤和功能进行封装。封装时根据不同的功能，进行不同的封装，功能类似的封装在一起。这样结构就清晰了很多。用的时候找到对应的类就可以了。
``` 