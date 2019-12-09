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
    setState(state) {
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