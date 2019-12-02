http://www.typescriptlang.org/play/


**演示TS**

###### 封装
```
// 父类
class People {
    public name:string
    public age:number
    protected weight:number // 受保护类型 对自己/子类开放
    constructor(name:string, age:number) {
        this.name = name
        this.age = age
        this.weight = 120
    }

    eat() {
        console.log(`${this.name} eat something`)
    }
    speak() {
        console.log(`Hello,Im ${this.name},and Im ${this.age} years old`)
    }
}
// 子类
class Student extends People {
    public studentId:number
    private assets:number // 资产 私有类型
    constructor(name:string, age:number,studentId:number) {
        super(name, age) // 交给父类构造函数去执行
        this.studentId = studentId
        this.assets = 0
    }
    console.log(this.assets)
    study() {
        console.log(`${this.name} is studying which id is ${this.studentId}`)
    }
    getWeight() {
        console.log(`${this.name}'s weight is ${this.weight}`)
    }
}
// 实例
let student1 = new Student('学生小明',10,2019001)
student1.getWeight()
// console.log(student1.weight) // Property 'weight' is protected and only accessible within class 'People' and its subclasses.  对于protected类型只能在自己或者子类内容访问，不能在外部访问
// console.log(student1.assets) // Property 'assets' is private and only accessible within class 'Student'   对于private类型只能在自己内部访问，不能再外部访问（包括子类）
```