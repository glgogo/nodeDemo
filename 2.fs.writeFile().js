//1.引入fs模块
const fs = require('fs');
//2.fs.writeFile()方法，写入文件的内容
    // 参数1：表示文件的存放路径
    // 参数2：表示要写入的内容
    // 参数3：表示可选编码模式，默认为utf8 可选参数
    // 参数4：回调函数
var str = 'my node process!'
fs.writeFile('./files/demo2.txt',str,function(err){
    //如果文件写入成功，则err的值等于 null
    // 如果文件写入失败，则err的值等于一个 错误对象
    if(err){
        console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功')
})