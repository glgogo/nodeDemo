// 导入 mysql模块
const mysql = require('mysql');

// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
});


// 删除数据
/*let sqlStr = 'delete from users where id=?'

db.query(sqlStr, 9, (err, result) => {
    if (err) console.log(err.messge);

    // 注意：使用 delete 删除的数据的结果 result 也是一个对象，使用result.affectedRows === 1 判断是否操作成功
    if (result.affectedRows === 1) {
        console.log('数据删除成功');
    }
})*/


// 标记删除
// 标记删除：使用 delete 删除数据会真正将数据 删除，为了保险起见，推荐使用 标记删除 的方式，来模拟删除的动作
// 即：将用户的 status 的状态更改为 禁用 状态，同样可以达到删除的效果
let sqlStr = 'update users set status=? where id=?';

db.query(sqlStr, [1, 4], (err, result) => {
    if (err) console.log(err.message);

    if (result.affectedRows === 1) {
        console.log('数据禁用成功')
    }
})