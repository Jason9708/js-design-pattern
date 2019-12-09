import StateMachine from 'javascript-state-machine'

// 状态机模型变量
var machine = new StateMachine({
        init: 'pending',

        transitions: [{
                name: 'resolve',
                from: 'pending',
                to: 'fullfilled'
            },
            {
                name: 'reject',
                from: 'pending',
                to: 'rejected'
            }
        ],
        methods: {
            // 成功
            onResolve: function(state, data) {
                // 参数:state - 当前状态； data - machine.resolve(xxx)执行时参入的参数
                data.successList.forEach(fn => fn())
            },
            onReject: function(state, data) {
                // 参数:state - 当前状态； data - machine.resolve(xxx)执行时参入的参数
                data.failList.forEach(fn => fn())
            }
        }
    })
    // 定义Promise
class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []

        fn(() => {
            // resolve函数
            machine.resolve(this)
        }, () => {
            // reject函数
            machine.reject(this)
        })
    }
    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}


// Test
function loadImg(src) {
    const promise = new MyPromise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject()
        }
        img.src = src
    })
    return promise
}

let src = 'https://user-gold-cdn.xitu.io/2019/11/24/16e9d4632235d0eb?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1'
let result = loadImg(src)

result.then(function() {
    console.log('ok1')
}, function() {
    console.log('fail1')
})

result.then(function() {
    console.log('ok2')
}, function() {
    console.log('fail2')
})