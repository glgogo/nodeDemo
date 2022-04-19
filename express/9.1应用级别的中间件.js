/*中间件分为 5 大类，分别是
    1.应用级别中间件：通过app.use(),app.get(),app.post(),绑定到app实例上的中间件，叫做应用级别的中间件
    2.路由级别中间件：绑定到express.Router()实例上的中间件，叫做路由级中间件，它的用法和应用级别中间件
    没有任何区别，只是，应用级别中间件时绑定到app实例上，路由及别中间件绑定到router实例上
    3.错误级别中间件：
    4.Express内置中间件：
    5.第三方中间件：
*/

// 1.应用级别中间件实例：

const express = require('express');

const app = express();

const mw = function (req, res, next) {
    console.log('局部中间件被执行');

    next()
}

app.use(mw);

app.get('/api', (req, res) => {
    console.log('数据请求成功');
    res.send(req.query);
})

app.listen(80, () => {
    console.log('服务器成功启动！')
})