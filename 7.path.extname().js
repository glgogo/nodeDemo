//通过path.extname()方法获取所在路径中文件的扩展名
// 1.指定文件路径
const pathStr = 'a/b/c/d/index.html';
// 2.引入 path 模块
const path = require('path');
//调用 path.extname()方法 传入路径 作为参数
const moreName = path.extname(pathStr);

console.log(moreName);  //.html