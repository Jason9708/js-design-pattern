class SingleObject {
    login() {
        console.log('login...')
    }
}

SingleObject.getInstance = (() => {
    let instance
    return () => {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// Test : 注意由于Js没有private等修饰符，所以只能使用静态函数getInstance，不能使用new SingleObject()
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // true，两者是同一实例，必须完全相等

let obj3 = new SingleObject() // 无法完全控制
console.log(obj1 === obj3) // false