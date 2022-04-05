//path.basename()方法：可以从一个文件路径中，获取到文件的名称部分；
const path = require('path');

const pathStr = '/a/b/c/d/index.html';
//basename()传递一个路径参数时，默认将文件名和文件扩展名全部返回
var fullName = path.basename(pathStr);

console.log(fullName); //index.html
//basename()传递两个参数时（路径参数，扩展名参数），只将文件名输出，不会输出扩展名
var moreName = path.basename(pathStr,'.html');

console.log(moreName);  //index