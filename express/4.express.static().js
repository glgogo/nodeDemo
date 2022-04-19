const express = require('express');

const app = express();

// 在这里调用express.static()函数，快速对外提供静态资源
// app.use(express.static('../files'));

// 挂在多个路径时，需要多次调用express.static()函数
// 访问静态i资源时，express.static()函数会根据目录的添加顺序查找所需要的文件
// app.use(express.static('../'));

// 定义带有 挂载路径前缀的 静态访问函数,注意/public中的 / 不要忘记写
app.use('/public', express.static('../files'))

app.listen(80, function () {
    console.log('服务器启动成功');
})

