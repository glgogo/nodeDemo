const express = require('express');

const app = express();

// 使用简写的形式定义第一个全局中间件
app.use(function (req, res, next) {
    console.log('调用了第1个中间件函数');

    next();
})

// 使用简写的形式定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第2个中间件函数');

    next();
})

app.get('/user/list', function (req, res) {
    console.log('用户列表请求成功！');
    res.send('用户列表请求成功！');
})

app.listen(80, function () {

    console.log('服务器启动成功！')
})