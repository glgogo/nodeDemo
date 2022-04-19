// 1.引入 express 模块
const express = require('express');

// 2.创建 router 路由对象
const router = express.Router();

// 3.创建get接口

router.get('/user/list', (req, res) => {
    // 3.1获取客户端通过 查询字符串 发送至服务器的数据
    const queryStr = req.query;

    // 3.2调用res.send()方法 , 把数据响应给客户端
    res.send({
        status: 0,
        msg: 'GET数据请求成功!',
        data: queryStr
    })
})

// 4.创建post接口

router.post('/user/new', (req, res) => {
    // 3.1获取客户端通过 请求体 发送到服务器的 URL-encoded 数据
    const bodyStr = req.body;

    // 3.2调用res.send()方法 , 把数据响应给客户端
    res.send({
        status: 0,
        msg: 'POST数据请求成功!',
        data: bodyStr
    })
})

// 5.创建delete接口

router.delete('/user/del', (req, res) => {
    // 5.1调用res.send()方法 , 把数据响应给客户端
    res.send({
        status: 0,
        msg: 'DELETE数据请求成功!',
    })
})

// 4.将绑定路由的 router 对象抛出
module.exports = router;