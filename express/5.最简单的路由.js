const express = require('express');

const app = express();

// 路由最简单的用法就是直接将 路由 挂在在 app  上，如下面两个路由案例
// 路由案例1
app.get('/', function (req, res) {
    console.log('数据请求成功！');
    res.send('数据请求成功' + req.query);
})

// 路由案例2
app.post('/', function (req, res) {
    console.log('数据发送成功');
    res.send('数据发送成功' + req.params);
})

// 每当一个请求到达服务器后，需要先经过路由的匹配，只有匹配成功后，才会调用对应的处理函数
// 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的url同时匹配成功，则express会将
// 这次请求转交给对应的回调函数处理

app.listen(80, function () {
    console.log('服务器启动成功！')
})