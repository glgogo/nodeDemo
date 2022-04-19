/*
如果项目中已经配置了 CORS 跨域资源共享,为了防止冲突,必须在配置 CORS 中间件之前声明 jsonp的接口,
否则JSONP接口会被处理成开启了CORS的接口

*/

// 导入 express 模块
const express = require('express');

// 导入 cors 中间件模块
const cors = require('cors');

// 创建 express 服务器实例
const app = express();

// 注意:JSONP 中间件引入 一定要在 cors 之前,否则 JSONP 会被当做 cors 处理,有兼容性问题
app.get('/api/jsonp', (req, res) => {
    // 1.获取客户端响应函数名称
    const funName = req.query.callback;

    // 2.定义要发送到客户端的数据对象
    const data = {
        name: 'zhangsan',
        age: 18
    };

    // 3.拼接出一个函数的调用
    const funStr = `${funName}(${JSON.stringify(data)})`

    // 4.把拼接到的函数调用字符串, 响应给客户端的 < script > 标签进行解析
    res.send(funStr);
})

// 配置 cors 中间件
app.use(cors());

// 配置解析表单数据的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 引入自定义接口模块
const router = require('./11.2 exress接口文件')

// 注册接口文件
app.use(router);

// 创建web服务器实例
app.listen(80, () => {
    console.log('web服务器启动成功！')
})