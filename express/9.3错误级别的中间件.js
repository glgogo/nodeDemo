/*中间件分为 5 大类，分别是
    1.应用级别中间件：通过app.use(),app.get(),app.post(),绑定到app实例上的中间件，叫做应用级别的中间件
    2.路由级别中间件：绑定到express.Router()实例上的中间件，叫做路由级中间件，它的用法和应用级别中间件
    没有任何区别，只是，应用级别中间件时绑定到app实例上，路由及别中间件绑定到router实例上
    3.错误级别中间件：专门用来捕获整个项目中发生的一场错误，从而防止项目一场崩溃问题
    4.Express内置中间件：
    5.第三方中间件：
*/

/*
3.错误级别的中间件
    格式：错误级别中间件的 function 处理函数，必须有4个参数（多 err 形参），是function(err,req,res,next)
    注意：
        错误级别的中间件，必须注册在所有路由之后，防止错误级别中间件之后代码错误无法捕获到
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // console.log('ok')
    // 模拟服务端出现错误时
    throw new Error('服务器发生严重错误！！！');
    res.send(req.query)
})

// 错误级别中间件捕获到 错误信息，并通过err.message可以获取错误信息
//错误级别的中间件必须定义在所有路由之后
const mw = function (err, req, res, next) {
    console.log('错误级别路由被执行');
    res.send('服务器异常：' + err.message);

    next()
}

app.use(mw);

app.listen(80, () => {
    console.log('服务器启动成功！')
})