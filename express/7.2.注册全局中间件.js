// 客户端发起任何请求，到达服务器后，都会触发的中间件，叫做全局中间件

const express = require('express');

const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('调用了中间件函数');

    // 定义next()函数，用于传递值下一个中间件或者路由
    next()
}

// 定义全局中间件
app.use(mw);

//定义路由
app.get('/user/list', function (req, res) {
    console.log('数据请求成功！');
    res.send('数据请求成功！');
})

app.listen(80, function () {
    console.log('服务器启动成功！')
})