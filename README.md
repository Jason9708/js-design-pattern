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


### 设计原则
#### 何为设计？
- 按照哪一种思路或者标准来实现功能
- 功能相同，可以有不同的设计方案来实现
- 随着需求的增加，设计的作用才能体现出来

#### 五大设计原则 （SOLID）
**❗ 五大设计原则可以说是设计模式的基础，学好设计模式应该先理解五大设计原则**
```
S - 单一职责原则
        - 一个程序只做好一件事
        - 如果功能过于复杂就拆分开，每个部分保持独立
O - 开放封闭原则
        - 对扩展开放，对修改封闭（重点）
        - 增加需求时，尽量做到扩展新代码，而非修改已有代码
L - 李氏置换原则
        - 子类能覆盖父类
        - 父类能出现的地方子类就能出现
        - 由于Js是弱类型，以及继承使用较少，所以在Js中应用较少
I - 接口独立原则
        - 保持接口的单一独立，功能统一
        - Js中没有接口（TypeScript除外），使用较少
        - 类似于单一职责原则，但更关注于接口
D - 依赖导致原则
        - 面向接口编程，依赖于抽象而不依赖于具体
        - 使用方只关注接口而不关注具体类的实现
        - Js中使用较少（没有接口 & 弱类型）

JavaScript中：S O体现较多 L I D体现较少
```

#### 用 Promise 来说明 S 与 O
```
// 加载图片
function loadImg(src) {
    var promise = new Promise((resolve,reject) => {
        var img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}
var src = '...'
var result = loadImg(src)
```
```
result.then(img => {
    console.log('width：',img.width)
    return img
}).then(img => {
    console.log('height：',img.height)
}).catch( err => {
    // 捕获异常
    console.log(err)
})
```
**观察上面这个例子，我们可以发现**

单一职责原则体现在我们每一个`then`只做一件事，如果上面还想再做第三件事，我们就再加一个`then`，而不是在第一个或第二个`then`中多做一件事

开放封闭原则体现在如果我们有新的需求进来，我们不需要去修改第一第二个`then`，而是直接添加一个`then`去实现
```
总结：
单一职责原则：每一个 then 中的逻辑只做好一件事
开放封闭原则：如果新增需求，扩展 then
```

### 23种设计模式简介
- 创建型
     - 工厂模式（工厂方法模式，抽象工厂模式，建造者模式）
     - 单例模式
     - 原型模式
- 结构型
     - 适配器模式
     - 装饰器模式
     - 代理模式
     - 外观模式
     - 桥接模式
     - 组合模式
     - 享元模式
- 行为型
     - 策略模式
     - 模板方法模式
     - 观察者模式 （Js应用较多）
     - 迭代器模式 （Js应用较多）
     - 职责链模式
     - 命令模式
     - 备忘录模式
     - 状态模式 （Js应用较多）
     - 访问者模式
     - 中介者模式
     - 解释器模式


