const express = require('express');

const app = express();

app.listen(80, () => {
    console.log('express running in http://127.0.0.1')
})
//req.params 用于获取动态匹配的参数，params：意思为 参数是可变的
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})