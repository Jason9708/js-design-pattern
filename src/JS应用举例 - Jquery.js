class JQuery {
    constructor(selector) {
            let slice = Array.prototype.slice
            let dom = slice.call(document.querySelectorAll(selector)) // 获取每一个dom元素
            let len = dom ? dom.length : 0
            for (let i = 0; i < len; i++) {
                this[i] = dom[i]
            }
            this.length = len
            this.selector = selector || ''
        }
        // JQuery自身API
    append(node) {
        // TODO
    }
    addClass(name) {
        // TODO
    }
    html(data) {
            // TODO
        }
        // ...
}

window.$ = function(selector) {
    // 工厂模式
    return new JQuery(selector)
}

// 测试
var $p = $('p')
console.log($p)
console.log($p.append)