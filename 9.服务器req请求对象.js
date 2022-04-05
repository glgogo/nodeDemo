const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    //req.url 是客户端请求的url地址
    //req.method 是客户端请求时的method类型  GET  POST
    var str = `请求地址：${req.url} 
    请求类型为：${req.method}`;
    console.log(str) ;
    //调用res.end()方法 ，向客户端相应一些内容
    res.end(str)
})

server.listen(80,()=>{
    console.log('服务器启动成功！')
})