class ReadImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadFromDisk() // 初始化即从硬盘中加载
    }
    loadFromDisk() {
        console.log('loading...', this.fileName)
    }
    display() {
        console.log('display...', this.fileName)
    }
}

// 代理
class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}

// Test
let proxyImg = new ProxyImg('1.png')
proxyImg.display()

/*
    Result：
    loading...1.png
    display...1.png
*/