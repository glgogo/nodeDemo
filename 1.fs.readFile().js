//输出语句
// console.log('Hellow node');
// 1.导入fs模块 来操作文件
const fs = require('fs');
// 2.调用fs.readFile()方法读取文件
    // 参数1：读取文件存放路径
    // 参数2：  读取文件时候的编码格式，一般采用utf8
    // 参数3：回调函数，拿到读取失败和成功的结果 err  dataStr
fs.readFile('./files/demo1.txt','utf8',function(err,dataStr){
    //如果读取成功，则err的值为null
    //如果读取失败，则err的值为 错误对象吗，dataStr的值为undefined
    if(err){
        console.log('文件获取失败' + err.message)
    }
    console.log('文件获取成功' + dataStr)
})