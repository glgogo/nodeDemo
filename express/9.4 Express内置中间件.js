/*中间件分为 5 大类，分别是
    1.应用级别中间件：通过app.use(),app.get(),app.post(),绑定到app实例上的中间件，叫做应用级别的中间件
    2.路由级别中间件：绑定到express.Router()实例上的中间件，叫做路由级中间件，它的用法和应用级别中间件
    没有任何区别，只是，应用级别中间件时绑定到app实例上，路由及别中间件绑定到router实例上
    3.错误级别中间件：专门用来捕获整个项目中发生的一场错误，从而防止项目一场崩溃问题
    4.Express内置中间件：
    5.第三方中间件：
*/

/*
    4.Express内置中间件分为3个常用的中间件：
        --> express.static：快速托管静态资源的内置中间件，例如：html文件、图片、css样式等；
        --> express.json：解析JSON格式的请求体数据（有兼容性，4.16.0+）
        --> express.urlencoded：解析URL-encoded 格式的请求体数据（有兼容性，4.16.0+）

    
*/

// 4.1 express.static
const express = require('express');

const app = express();

// 共享静态资源
app.use('/public', express.static('../files'));


// ——————————————————————————————————————————————————————————————————————————————
// 4.2 express.json
// 注册中间件：解析JSON格式的请求体数据
app.use(express.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('ok')
})



//4.3 express.urlencoded

// 注册中间件 express.urlencoded({ extended: false })：解析URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }))

app.post('/use', (req, res) => {
    console.log(req.body);
    res.send('ok')
})


app.listen(80, () => {
    console.log('服务器启动成功')
})