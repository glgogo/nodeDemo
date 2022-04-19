// 导入 express 模块
const express = require('express');

const app = express();

// 导入 body-parser 模块
const parser = require('body-parser');

// 使用 app.use()和body-parser 模块注册urlencoded中间件
app.use(parser.urlencoded({ extended: false }));

// 使用app.use()和body-parser 模块注册json中间件
app.use(parser.json());


// 创建路由
app.post('/book', (req, res) => {
    console.log('数据请求成功！');

    res.send(req.body);
})

// 创建服务器
app.listen(80, () => {
    console.log('服务器启动成功！');
})