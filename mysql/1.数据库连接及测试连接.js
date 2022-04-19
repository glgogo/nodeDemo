// 1.引入数据库模块
const mysql = require('mysql');

// 2.绑定数据库
const dateBase = mysql.createPool({
    host: '127.0.0.1',      //数据库的ip地址
    user: 'root',           //登录数据库的账号
    password: 'admin123',   //登录数据库的密码
    database: 'my_db_01'    //指定要操作的数据库名称
})

// 3.测试数据库是否可以正常工作：调用 db.query() 函数，指定要执行的 SQL 语句，通过回调函数拿到执行的结果
dateBase.query('select 1', (err, res) => {  // SQL语句：'select 1' 只用于测时数据库连接状态
    if (err) {
        return console.log(err.message);
    }

    // 这里只要打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
    console.log(res);
})
