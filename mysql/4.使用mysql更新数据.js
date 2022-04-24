// 导入 mysql模块
const mysql = require('mysql');

// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
});


// 更新数据
/*let user = { id: 10, password: '678876', status: '1' };

let sqlStr = 'update users set password=?,status=? where id=?';

db.query(sqlStr, [user.password, user.status, user.id], (err, result) => {
    if (err) console.log(err.message);

    // 注意:使用 update 更新数据，result 存储的是一个对象，使用result.affectedRows === 1判断是否更新成功
    if (result.affectedRows === 1) {
        console.log('数据更新成功')
    }
})*/

// 更新数据 简写形式
let user = { id: 10, password: '888866', status: '0' };

let sqlStr = 'update users set ? where id=?';

db.query(sqlStr, [user, user.id], (err, result) => {
    if (err) return console.log(err.message);

    if (result.affectedRows === 1) {
        console.log('数据更新成功')
    }
})