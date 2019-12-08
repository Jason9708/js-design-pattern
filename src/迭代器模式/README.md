# 迭代器模式

### 介绍
- 顺序访问一个集合
- 使用者无需知道集合的内部结构（封装）

### 示例
```js
// Jquery的一个例子

<p>jquery each</p>
<p>jquery each</p>
<p>jquery each</p>

<script>
    var arr = [1,2,3]
    var nodeList = document.getElementsByTagName('p')
    var $p = $('p')

    // 要对这三个变量进行遍历，需要写三个遍历方法
    // 第一  遍历arr
    arr.forEach(function(item){
        console.log(item)
    })
    // 第二  遍历 nodeList
    var i, length = nodeList.length
    for(i = 0; i < length; i++) {
        console.log(nodeList[i])
    }
    // 第三 遍历jquery对象
    $p.each(function(key, p) {
        console.log(key, p)
    })
</script>
```
```js
// 写一个函数 能同时兼任这3种遍历方法

function each(data){
    // 既能遍历arr 又能遍历nodeList和Jquery对象
    var $data = $(data) // 生成迭代器
    $data.each(function(key, val) {
        console.log(key, val)
    })
}
each(arr)
each(nodeList)
each($p)


// 顺序遍历有序集合
// 使用者不必知道集合的内部结构
```

### UML类图
<img src='./images/迭代器模式.png'>

### 代码演示
```js
class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next() {
        if(this.hasNext()) {
            return this.list[this.index++]
        }
    }
    hasNext() {
        if(this.index >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor(list) {
        this.list = list
    }
    // 生成迭代器
    getIterator() {
        return new Iterator(this)
    }
}

var arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasNext()){
    console.log(iterator.next())
}

/*
    1
    2
    3
    4
    5
    6
*/
```

### 场景
- jQuery each
```js
function each(data) {
    var $data = $(data)
    $data.each(function(key, p) {
        console.log(key, p)
    })
}
```
- ES6 Iterator
    - ES6语法中，有序集合的数据类型已经有很多
    - Array Map Set String TypedArray arguments NodeList
    - 需要有一个统一的遍历接口来遍历所有数据类型
    - 注意：object不是有序集合，可以用Map代替
    - 以上数据类型，都有[Symbol.iterator]属性shun
    - 属性值是函数，执行函数返回一个迭代器
    - 这个迭代器就有next方法可顺序迭代子元素
    - 可运行Array.prototype[Symbol.iterator]来测试
```js
function each(data) {
    // 生成遍历器
    let iterator = data[Symbol.iterator]()

    // console.log(iterator.next()) // 有数据时返回 { value:1,done: false }
    // console.log(iterator.next()) // 没有数据时返回 { value:undefined, done: true }
    let item = { done:false }
    while(!item.done) {
        item = iterator.next()
        if(!item.done) {
            console.log(item.value)
        }
    }
}

// Test
let arr = [1,2,3,4]
let nodeList = document.getElementByTagName('p')
let m = new Map()
m.set('a',100)
m.set('b',200)

each(arr)
each(nodeList)
each(m)
```
```js
 // 'Symbol.iterator' 并不是人人都知道
 // 也不是每个人都需要封装一个each方法
 // 因此有了 'for...of' 语法   有[Symbol。iterator]才能执行 for...of

 function each(data) {
     for(let item of data) {
         console.log(item)
     }
 }

 each(arr)
 each(nodeList)
 each(m)
```

### 设计原则验证
迭代器对象与目标对象分离，即迭代器将使用者与目标对象隔离开，符合了开放封闭的原则

