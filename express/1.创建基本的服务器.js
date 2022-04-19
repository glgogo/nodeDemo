// 1.导入 express
const express = require('express');

// 2.创建web服务器
const app = express();

// 3.调用app.listen(端口号,启动成功后回调函数)，启动服务器
app.listen(80, () => {
    console.log('服务器启动成功!')
})

// 监听客户端get请求，并向客户端响应具体内容
app.get('/user', (req, res) => {
    // 调用express提供的 res.send()方法，向客户端响应数据
    console.log('get请求成功')
    res.send({ name: 'zs', age: 20, gender: '男' })
})

// 监听客户端post请求,并向客户端相应具体内容
app.post('/user', (req, res) => {
    // 调用express提供的 res.send()方法,向客户端响应数据
    console.log('post请求成功')
    res.send('后台数据请求成功!')
})