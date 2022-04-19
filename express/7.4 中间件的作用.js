// 多个中间件之间，共同享有一份 req 和 res，基于这样的特性，我们可以在上游的中间件中，
// 统一为 req或res 对象添加 自定义属性或 方法，供下游的中间件或者路由使用

const express = require('express');

const app = express();



app.use(function (req, res, next) {
    console.log('调用了第1个中间件')
    req.uname = 'zs';
    next();
});

app.use(function (req, res, next) {
    console.log('调用了第2个中间件')
    req.uage = 18;
    next();
});


app.get('/user/list', function (req, res) {
    console.log('获取用户列表成功')
    res.send('获取用户列表成功' + req.uname + req.uage)
})

app.listen(80, function () {
    console.log('服务器启动成功！')
})