// 引入mysql模块
const mysql = require('mysql');

// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 查询数据1
let sqlStr = 'select * from users';
db.query(sqlStr, (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    // result 返回的数据时一个 包含若干个对象属性的 数组
    console.log(result)
})

// let sqlStr = 'select username,password from users';
// db.query(sqlStr, (err, result) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     // result 返回的数据时一个 包含若干个对象属性的 数组
//     console.log(result)
// })