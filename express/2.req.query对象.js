// 1.导入 express 模块
const express = require('express');
// 2.创建express服务器
const app = express();
// 3.启动服务器
app.listen(80, () => {
    console.log('express running at http://127.0.0.1')
})
// 调用get函数,并通过req.query对象获取 查询字符串中数据
app.get('/user', (req, res) => {

    console.log(req.query);
    res.send(req.query);
})

// 调用post函数,并通过req.query对象获取 发送数据
app.post('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})