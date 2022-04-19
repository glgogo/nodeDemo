// 1.导入expres模块
const express = require('express');
// 2.通过express.Router()函数创建 路由 对象
const router = express.Router();
// 3.通过路由对象创建第一个路由
router.get('/user/list', function (req, res) {
    res.send('请求用户列表成功')
})

// 4.通过路由对象创建第二个路由
router.post('/user/new', function (req, res) {
    res.send('用户注册成功')
})


// 5.通过module.exports 将挂在好路由的 router 对象抛出
// 这里只能用等于的方式，不能使用对象的方式
module.exports = router;