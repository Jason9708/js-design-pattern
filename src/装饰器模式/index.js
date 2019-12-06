class Circle {
    draw() {
        console.log('画一个圆形')
    }
}
// 装饰器
class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    setRedBorder(circle) {
        console.log('设置红色边框')
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
}

// Test
let circle = new Circle()
circle.draw()
console.log('------分割线-------')
let decorator = new Decorator(circle)
decorator.draw()

/*
    结果：
    画一个圆形
    ------分割线-------
    画一个圆形
    设置红色边框
*/