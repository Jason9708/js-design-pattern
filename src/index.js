// 继承 + 多态
// 创建类
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(`${this.name} eat something`)
    }
    speak() {
            console.log(`Hello,Im ${this.name},and Im ${this.age} years old`)
        }
        // 演示多态 不同子类不同实现
    saySomething() {}

}
// 创建实例
let people1 = new People('张三', 20)
people1.eat()
people1.speak()
let people2 = new People('李四', 21)
people2.eat()
people2.speak()

console.log('-----------------------------------')

// 使用继承
class Student extends People {
    constructor(name, age, studentId) {
        super(name, age) // 交给父类构造函数去执行
        this.studentId = studentId
    }
    study() {
        console.log(`${this.name} is studying which id is ${this.studentId}`)
    }
}
// 创建实例
let student1 = new Student('学生张三', 20, 2019001)
student1.eat()
student1.study()
let student2 = new Student('学生李四', 21, 2019002)
student2.eat()
student2.study()

// 演示多态
class A extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        console.log('I am A')
    }
}
class B extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        console.log('I am B')
    }
}
let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething('b')