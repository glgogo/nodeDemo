// 引入 mysql 模块
const mysql = require('mysql');

// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 插入数据
/*let user = { username: 'ww', password: '188888' };

let sqlStr = 'insert into users (username,password) values (?,?)';

db.query(sqlStr, [user.username, user.password], function (err, result) {
    if (err) {
        return console.log('错误：' + err.message);
    }
    // 注意：使用 insert into 插入数据，result 是一个对象
    // 可以通过 result.affectedRows 属性，来判断是否插入数据成功 ===1 时为插入成功
    if (result.affectedRows === 1) {
        console.log('数据插入成功');
    }
})*/

// 插入数据：简写方式
let user = { username: 'qq', password: '666999' };

let sqlStr = 'insert into users set ?';

db.query(sqlStr, user, (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('数据插入成功！');
    }
})