const http = require('http');

const server = http.createServer();

server.on('request',function(req,res){
    var str = `请求地址：${req.url} 
    请求类型为：${req.method}`;
    console.log(str) ;
})

server.listen(80,()=>{
    console.log('服务器启动成功！')
})