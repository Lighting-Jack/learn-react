const koa = require('koa')
const { fork, spawn, exec } = require('child_process')

// 当作模块引入
const child = require('./child')
let execResult
let error
let resData

const event = {}
const context = {
    done: (status, data) => {
        // process.exit(data)
    }
}
const callback = (status, data) => {
    resData = data
}

try {
    execResult = child(event, context, callback)
    console.log(execResult)
} catch (e) {
    error = e
}
process.on('beforeExit', (code) => {
    console.log('beforeExit: ', code, resData, error)
})
process.on('exit', (code) => {
    console.log('exit: ', code)
})
process.on('close', (code) => {
    console.log('close: ', code)
})

/// 父子进程通信
// let childProcess
// try {
//     childProcess = fork('./child.js')
// } catch (e) {
//     console.log(e)
// }
// // 进程通信
// childProcess.on('message', (data) => {
//     console.log('master receive mesaage:' + data)
// })
// // 错误监听
// childProcess.on('close', (code, signal) => {
//     console.log('child has closed', code, signal)
// })
// childProcess.on('error', (err) => {
//     console.log('error has occured on childProces', err)
// })
// childProcess.on('beforeExit', (err) => {
//     console.log('child beforeExit ', err)
// })
// childProcess.on('rejectionHandled', (err) => {
//     console.log('child rejectionHandled', err)
// })
// childProcess.on('unhandledRejection', (err) => {
//     console.log('child unhandledRejection', err)
// })
// childProcess.on('warning', (err) => {
//     console.log('child warning', err)
// })
