class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun1() {
        console.log('fun1')
    }
    fun2() {
        console.log('fun2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

// Test
let creator = new Creator()
let product = creator.create('product')
product.init()
product.fun1()
product.fun2()