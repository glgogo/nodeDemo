// 1.导入http 模块
const http = require("http");
// 2.创建web服务器实例
const server = http.createServer();
// 3.为服务器绑定request事件，监听客户端请求
server.on('request',function(req,res){ //只要客户端有人请求服务器数据，就会触发 request 事件
    console.log("Hava some request at doing!")
})
// 4.启动服务器
server.listen('8080',function(){
    console.log('服务器启动成功！启动地址：127.0.0.1')
})