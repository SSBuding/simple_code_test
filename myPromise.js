//状态码对象
const PROMISE_STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise {

    //数据
    #result
    //状态
    #state = PROMISE_STATE.PENDING
    //设置回调函数
    #callbacks = []
    //构造函数
    constructor(execute) {
        //调用exectute执行器
        //绑定this
        execute(this.#resolve.bind(this), this.#reject.bind(this))

    }

    //私有resolve方法
    #resolve(value) {
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = value
        this.#state = PROMISE_STATE.FULFILLED

        queueMicrotask(() => {
            this.#callbacks.forEach(cb => {
                cb()
            })
        })
    }
    //私有reject方法
    #reject(reason) {

    }

    //实例then方法读取数据
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.#state === PROMISE_STATE.PENDING) {
                this.#callbacks.push(() => {
                    resolve(onFulfilled(this.#result))
                })
            } else if (this.#state === PROMISE_STATE.FULFILLED) {
                queueMicrotask(() => {
                    resolve(onFulfilled(this.#result))
                })

            }
        })


    }
}

const mp = new MyPromise((reslove, reject) => {
    setTimeout(() => {
        reslove("111")
    }, 1000);
})
mp.then(result => {
    console.log("第一次" + result)
})
mp.then(result => {
    console.log("第二次" + result)
})
mp.then(result => {
    console.log("第三次" + result)
})