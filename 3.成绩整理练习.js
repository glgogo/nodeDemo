//1.先通过fs.readFile()方法获取到 成绩.txt 数据
const fs = require('fs');
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    if(err){
        console.log('文件读取失败' + err.message);
    }
    //2.通过返回字符串的类型，将字符串进行改造，转化成数组格式
    let oldArr = dataStr.split(' ')
    //3.通过数组遍历，将成绩拼接为字符串
    let newArr = [];
    oldArr.forEach(value => {
        newArr.push(value.replace('=',':'));
    });
    let newStr = newArr.join('\r\n');
    console.log(newStr);
    //4.再通过fs.writeFile()方法，将整理好的数据填充到 成绩-ok.txt 文件中
    fs.writeFile('./files/成绩-ok.txt',newStr,'utf8',function(err){
        if(err){
            console.log('文件写入失败！ + err/message');
        }
        console.log('文件写入成功！');
    })
})
