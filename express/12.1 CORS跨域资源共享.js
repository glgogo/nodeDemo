/*
cors是express的一个第三方中间件，通过安装和配置cors中间件，可以很方便地解决跨域问题
使用步骤分为以下三个步骤：
    1.运行 npm install cors 安装cors中间件
    2.使用 const cors = require('cors') 导入中间件
    3.使用 app.use(cors()) 配置中间件
*/

// 导入 express 模块
const express = require('express');

// 1.导入 cors 中间件模块
const cors = require('cors');

// 创建 express 服务器实例
const app = express();

// 2.配置 cors 中间件
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