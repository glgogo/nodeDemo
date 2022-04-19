const express = require('express');

const app = express();

//局部中间件与全局中间件的区别为：全局中间件注册需要使用app.use()定义,而局部中间件不需要
const mw = function (req, res, next) {
    console.log('局部中间件1被执行！')
    res.a = 10;
    next()
}

// 定义多个局部中间件
const mw2 = function (req, res, next) {
    console.log('局部中间件2被执行');
    res.b = 20;
    next()
}

// 定义多个局部中间件
const mw3 = function (req, res, next) {
    console.log('局部中间件3被执行');

    next()
}

// 定义多个局部中间件
const mw4 = function (req, res, next) {
    console.log('局部中间件4被执行');

    next()
}

// 使用多个局部中间件时使用逗号隔开或者使用数组模式
app.get('/', mw, mw2, function (req, res) {
    console.log('数据获取成功！' + res.a + res.b);
    res.send(req.query);
})

//使用多个局部中间件时使用数组形式传递
app.post('/', [mw3, mw4], function (req, res) {
    console.log('数据发送成功！')
    res.send(req.query)
})

app.listen(80, function () {
    console.log('服务器启动成功！')
})