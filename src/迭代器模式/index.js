class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next() {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor(list) {
            this.list = list
        }
        // 生成迭代器
    getIterator() {
        return new Iterator(this)
    }
}

var arr = [1, 2, 3, 4, 5, 6]
let container = new Container(arr)
let iterator = container.getIterator()
while (iterator.hasNext()) {
    console.log(iterator.next())
}

/*
    1
    2
    3
    4
    5
    6
*/