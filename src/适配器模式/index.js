class Adaptee {
    specificRequest() {
        return '标准插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换 → 大号插头`
    }
}

// Test
let target = new Target()
let result = target.request()

console.log(result)