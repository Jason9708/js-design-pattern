// @testDec
// class Demo {

// }

// function testDec(target) {
//     target.isDec = true
// }
// alert(Demo.isDec)


// function readonly(target, name, descriptor) {
//     // descriptor 属性描述对象 （ Object.defineProperty中会用到），原来的值如下
//     // {
//     //     value: specifiedFunction,
//     //     enumerable:false,
//     //     configurable: true,
//     //     writable: true
//     // }
//     descriptor.writable = false
//     return descriptor
// }

// class Person {
//     constructor() {
//         this.first = 'A'
//         this.last = 'B'
//     }

//     // 装饰方法
//     @readonly   // 将name属性的writable装饰为false
//     name() {
//         return `${this.first} - ${this.last}`
//     }
// }

// var p = new Person()
// console.log(p.name())   // A - B
// // p.name = function() {}   // 这里会报错，是因为 name函数被装饰为只读属性


function log(target, name, descriptor) {
    var oldValue = descriptor.value

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }
}

class Math {
    // 装饰方法
    @log // oldValue → add()  经过装饰之后，会先打印日志，然后执行oldValue，也就是add()
    add(a, b) {
        return a + b
    }
}

const math = new Math()
const result = math.add(2, 4) // 执行add时，会自动打印日志，因为add已经被log装饰器装饰过
console.log(result)

/*
    Result:
    Calling add with Arguments(2) [2, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
    6
*/