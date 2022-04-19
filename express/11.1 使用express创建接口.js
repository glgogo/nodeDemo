// 1.导入 express 模块
const express = require('express');

// 2.创建 express 服务器实例
const app = express();

// 6.配置解析表单数据的中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 4.引入自定义接口模块
const router = require('./11.2 exress接口文件')

// 5.注册接口文件
app.use(router);

// 3.创建web服务器实例
app.listen(80, () => {
    console.log('web服务器启动成功！')
})