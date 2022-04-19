const express = require('express');

const app = express();

// 6.导入自定义路由模块
const userRouter = require('./6.路由的模块化');

// 7-1 使用 app.use(路由对象) 注册路由————未添加路径前缀
// app.use(userRouter);

// 7-2 使用 app.use() 注册带有 默认路径前缀的路由
app.use('/api', userRouter)

app.listen(80, () => {
    console.log('服务器启动成功！')
})