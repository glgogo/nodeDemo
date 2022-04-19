SELECT * FROM my_db_01.users;

-- 1.选出所有用户数据
-- select * from my_db_01.users

-- 2.筛选部分列属性，获取username, password数据
-- select username,password from my_db_01.users

-- 3.使用 insert into 向 my_db_01.users表中插入用户信息
-- insert into my_db_01.users (username,password) values ('sq','555555')
-- select * from my_db_01.users

-- 4.使用update 语句修改现有用户的信息
-- update my_db_01.users set password='123456' where id=2
-- update my_db_01.users set status='1' where id=5
-- select * from my_db_01.users

-- 5.使用 update 语句更新某一行中的一列
-- update my_db_01.users set status='1' where id = 3
-- select * from my_db_01.users

-- 6.使用 update 语句更新某一行的多列,多列之间使用 逗号 隔开
-- update my_db_01.users set password='admin456',status='1' where id=1
-- select * from my_db_01.users

-- 7.删除 id=3 的用户信息
-- delete from my_db_01.users where id=3
-- select * from my_db_01.users

-- 8.使用 and 运算符，筛选状态为0 并且 用户名为zl的用户信息
-- select * from my_db_01.users where status='0' and username='zl'

-- 9.使用 or 运算符，筛选状态为0 或者 用户名为ls的用户信息
-- select * from my_db_01.users where status='0' or username='ls'


-- 10.使用语句 order by 列名称 方式实现数据排序，默认排序方式为 asc 升序
-- select * from my_db_01.users order by status asc

-- 11.使用语句 order by 列名称 方式实现数据排序，desc 降序
-- select * from my_db_01.users order by status desc

-- 12.使用语句 order by 语句实现混合排序
-- select * from my_db_01.users order by status asc , username desc

-- 13.使用 count(*) 语句，返回查询结果的总数据条数
-- select count(*) from my_db_01.users where status<1
-- select count(*) from my_db_01.users where id<=3

-- 14.使用 as 关键字，将筛选数据的列表别名进行更改
-- select count(*) as total from my_db_01.users where status<1
-- select username as uname, password as psd from my_db_01.users

