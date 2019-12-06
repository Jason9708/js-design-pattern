// import { readonly } from 'core-decorators'

// class Person {
//     @readonly
//     name() {
//         return 'chicago'
//     }
// }

// let p = new Person()
// console.log(p.name()) // chicago
//     // p.name = function() {} // 这里会报错，是因为 name函数被装饰为只读属性


import { deprecate } from 'core-decorators'

class Person {
    @deprecate('即将废弃')
    name() {
        console.log('name')
    }
}

let p = new Person()
p.name() // warning: DEPRECATION Person#name: 即将废弃