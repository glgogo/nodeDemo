//1.引入path模块
const path = require('path');
//2.使用path.join()方法将多个路径片段拼接为完整的路径 ../会抵消上一个路径片段
const pathStr = path.join('a','b','c','../','./d','e');
console.log(pathStr); //a\b\d\e

// 3.实际应用
const pathStr2 = path.join(__dirname, '/files/demo1.txt');
console.log(pathStr2);