# 状态模式

### 介绍
- 一个对象有状态变化
- 每次状态变化都会触发一个逻辑
- 不能总是用if...else来控制

### 示例
- 交通信号灯不同颜色的变化

### UML类图

### 代码演示
```js
// 状态（ 红灯、绿灯、黄灯 ）
class State {
    constructor(color) {
        this.color = color
    }
    // 设置状态
    handle(context) {
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}
// 主体
class Context {
    constructor() {
        this.state = null
    }
    // 获取状态
    getState() {
        return this.state
    }
    setState() {
        this.state = state
    }
}

let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())

red.handle(context)
console.log(context.getState())

/*
    turn to green light
    State{ color: "green" }
    turn to yellow light
    State{ color: "yellow" }
    turn to red light
    State{ color: "red" } 
*/
``` 

### 场景
- 有限状态机
    - 有限个状态，以及在这些状态之间的变化
    - 如交通信号灯
    - 例子：开源库 javascript-state-machine
```js
// '收藏'和'取消'

// 状态机模型
var machine = new StateMachine({
    init: '收藏', // 初始状态，待收藏
    transitions: [
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏'
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        // 执行收藏
        onDoStore: function(){
            alert('收藏成功')
            updateText()
        }
        // 取消收藏
        onDeleteStore: function(){
            alert('已取消收藏')
            updateText()
        }
    }
})

var $btn = $('#btn')

// 监听点击事件
$btn.click(function(){
    if(machine.is('收藏')){
        machine.doStore()
    }else{
        machine.deleteStore()
    }
})

// 更新文案
function updateText() {
    $btn.text(machine.state)
}

// 初始化文案
updateText()
```
- 写一个简单的Promise
    - Promise就是一个有限状态机
    - Promise三种状态：pending、fullfilled、rejected
    - pending -> fullfilled 或者 pending -> rejected
    - Promise 不能逆向变化
```js
// 定义状态机
var machine = new StateMachine({
    init: 'pending',
    
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected'
        }
    ],
    methods: {
        // 成功
        onResolve: function(state, data) {
            // 参数:state - 当前状态； data - machine.resolve(xxx)执行时参入的参数
            data.successList.forEach( fn => fn() )
        },
        onReject: function(state, data) {
            // 参数:state - 当前状态； data - machine.resolve(xxx)执行时参入的参数
            data.failList.forEach( fn => fn() )
        }
    }
})
// 定义Promise
class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []

        fn( () => {
            // resolve函数
            machine.resolve(this)
        }, () => {
            // reject函数
            machine.reject(this)
        })
    }
    then(successFn,failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}
```

### 设计原则验证
将状态对象和主题对象分离，状态的变化逻辑单独处理，符合开放封闭原则