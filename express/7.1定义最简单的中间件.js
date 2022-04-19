
const express = require('express');

const app = express();

// 定义一个简单的中间件
const mw = function (req, res, next) {

    console.log('调用了 mw 中间件');
    // 其他处理代码……

    // 使用next()函数把流转关系，转交给下一个中间件或者直接到达路由
    next();
}
// 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
// 创建全局中间件
app.use(mw);

app.get('/', function (req, res) {
    console.log('数据请求成功！')
    res.send('数据请求成功！')
})

// 定义服务器
app.listen(80, function () {
    console.log('服务器启动成功！')
})