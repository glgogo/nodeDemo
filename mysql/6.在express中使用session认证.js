// 引入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

// 创建 router 路由实例
const router = express.Router();

// 引入 session 模块
const session = require('express-session');

// 导入 CORS 模块
const cors = require('cors');

// 注册 CORS 中间件
app.use(cors());


// 创建静态 服务器 
app.use(express.static('./session_test'))

// 注册 express.json() 中间件 用于处理 json 格式的表单数据
app.use(express.json());

// 注册 express.urlencoded 中间件 用于处理  urlencoded 格式表单数据
app.use(express.urlencoded({ extended: false }));

// 注册 router 路由模块
app.use(router);

// 注册 session 中间件
app.use(session({
    secret: 'good work',
    resave: false,
    saveUninitialized: true,
}))

// 注册完毕后 即可通过 req.session来访问和使用 session 对象，从而存储用户的信息
app.post('/api/login', (req, res) => {
    // 验证账户和密码是否正确
    if (req.body.username !== 'admin' || req.body.password !== 'admin123') {
        return res.send({
            status: 1,
            msg: '登录失败'
        });
    }
    // 存储用户名信息
    req.session.user = req.body;
    // 存储登录状态信息
    req.session.isLogin = true;

    res.send({
        status: 0,
        msg: '登录成功！',
    });
    console.log('登录成功')
})

// 登录成功后，从 session 中读取用户信息
app.get('/api/username', (req, res) => {
    // 验证用户是否登录
    if (!req.session.isLogin) {
        return res.send({
            status: 1,
            msg: 'fail'
        });
    }

    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

// 退出登录，调用req.session.destroy()函数，即可清空服务器保存的 session 信息
app.post('/api/logout', (req, res) => {
    // 清空当前客户端对应的 session 信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

// 创建 get 路由,挂在到router路由上
router.get('/user/list', (req, res) => {
    res.send(req.query);
})

// 创建 post 路由,挂在到router路由上
router.post('/user/new', (req, res) => {
    res.send(req.body);
})

// 错误时的中间件


// 创建服务器实例
app.listen(80, () => {
    console.log('服务器启动成功！running:http://127.0.0.1:80')
})