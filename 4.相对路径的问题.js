const fs = require('fs');


// 解决方案1：使用绝对路径，可以防止路径问题报错
// 缺点：使用绝对路径不利于维护
// fs.readFile('E:\\1.前端开发相关\\练习\\3.node\\files\\demo1.txt','utf8',function(err,data){
//     if(err){
//         console.log('文件读取失败！' + err.message);
//     }
//     console.log('文件读取成功！');
// })


// 结局方案2：使用'__dirname + 相对路径'，__dirname表示当前文件所处的目录
fs.readFile(__dirname + '/files/demo1.txt','utf8',function(err,data){
    if(err){
        console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功！' + '@' + data);
})