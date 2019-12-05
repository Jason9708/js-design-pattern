class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登陆框显示成功')
    }
    hide() {
        if (this.state = 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }
}

// 单例模式静态方法
LoginForm.getInstance = (() => {
        let instance
        return function() {
            if (!instance) {
                instance = new LoginForm()
            }
            return instance
        }
    })() //使用闭包保证instance不会被回收

// 测试
let login1 = LoginForm.getInstance()
login1.show() // console : 登陆框显示成功

let login2 = LoginForm.getInstance()
login2.hide() // alert ： 已经隐藏

console.log('login1 === login2', login1 === login2) // true