//导入express 基础模块
const express = require('express');

// 创建 express 实例对象
const app = express();

//导入 jsonwebtoken 模块，此模块用于生成 jwt 字符串
var jwt = require('jsonwebtoken');

// 导入 express-jwt 模块 此模块用于将 jwt 字符串解析还原为 json 对象
// 此方法为 ES6 解构赋值方法
const { expressjwt: expressJWT } = require("express-jwt");

// 引入 cors 跨域访问 模块
const cors = require('cors');

// 注册 cors 跨域访问中间件
app.use(cors());

// 配置解析表单数据的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 定义secret 密钥，用于生成 jwt 字符串加密，同时也用于 jwt 字符串解密
const secretkey = 'hello tom';



// 创建 post登录 路由

app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== 'admin123') {
        return res.send({
            status: 1,
            msg: '登录失败'
        })
    }

    // 登录成功后，调用jwt.sign()方法生成 jwt 字符串，并通过 token 属性发送给客户端
    /* sign方法参数：
            参数1：用户信息对象
            参数2：加密的密钥
            参数3：配置对象，可以配置当前token的有效期
    */
    const token = jwt.sign({ username: req.body.username }, secretkey, { expiresIn: '300s' })
    res.send({
        status: 0,
        msg: '登录成功！',
        token: token
    })
})


// 注册将 JWT 字符串解析还原为 JSON 对象的中间件
// 只要注册了 jwt 中间件，req 上会自动挂在 auth 属性，其中保存着 存储 的用户信息
app.use(expressJWT({ secret: secretkey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))



// 定义 get 路由
app.get('/my/username', (req, res) => {
    if (req.auth.username !== 'admin') {
        return res.send({
            status: 1,
            msg: '获取用户信息失败'
        })
    }
    console.log(req.auth)
    res.send({
        status: 200,
        msg: '获取用户信息成功！',
        data: req.auth
    })
})

// 定义处理错误的中间件 
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            msg: '无效的token'
        })
    }

    res.send({
        status: 501,
        msg: '未知的错误'
    })
})

// 创建服务器
app.listen(80, () => {
    console.log('服务器启动成功！')
})