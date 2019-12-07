// 主题，保存状态，当状态发生变化后，触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
            return this.state
        }
        // 当state发生改变，触发所有观察者
    setState(state) {
            this.state = state
            this.notifyAllObservers()
        }
        // 触发观察者函数
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state is ${this.subject.getState()}`)
    }
}

// Test
let subject = new Subject()
let observer1 = new Observer('observer1', subject)
let observer2 = new Observer('observer2', subject)
let observer3 = new Observer('observer3', subject)
subject.setState(1)

/*
    observer1 update, state is 1
    observer2 update, state is 2
    observer3 update, state is 3
*/