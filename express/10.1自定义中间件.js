// 4.使用querystring模块解析请求体数据
// 4.1导入 node 内置模块 querystring ,用来处理 str
const qs = require('querystring');

// 1.定义中间件
app.use(function (req, res, next) {
    // 2.监听 req 的 data 事件：实际数据请求过程中，因为数据较大，需要将数据分割成多段向服务器发送，所以需要将数据
    //   进行拼接，每段数据单独发送时，会触发一次 req 对象的 data 事件
    // 2.1定义变量，用于存储客户端发送过来的数据请求
    let str = '';
    // 2.2监听 req 对象的 data 事件
    req.on('data', (data) => {
        str += data;
    });

    // 3.监听 req 的 end 事件：当请求体数据接收完毕之后，会自动触发 req 对象的 end 事件，因此，我们可以在 req 的
    //   end 事件中，拿到并处理完整的请求体数据
    req.on('end', () => {
        // 4.2调用qs.parse()方法，把查询字符串解析为对象
        const body = qs.parse(str);
        // 5.将解析出来的数据对象挂在为req.body
        req.body = body;
        next();
    })

})


// 6.将自定义中间件封装为模块