// 引入 dataFormat 自定义模块
const data = require('./1.2dataFormat');
// 创建时间对象
const dt = new Date();
// 格式时间对象
const nowData = data.dataFormat(dt);
console.log(nowData);