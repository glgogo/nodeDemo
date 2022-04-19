const express = require('express');

const app = express();

const mybodyparse = require('./10.2 将自定义中间件模块化')

app.use(mybodyparse);

app.post('/book', (req, res) => {
    console.log('数据发送成功')
    res.send(req.body);
})

app.listen(80, () => {
    console.log('服务器启动成功！');
})