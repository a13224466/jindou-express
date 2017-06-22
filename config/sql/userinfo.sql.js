module.exports = {
    insert: 'insert into userinfo(name, age, sex, address, mobile, marry, remark, comment, cardid, qq, weixin) values(?,?,?,?,?,?,?,?,?,?,?)',
    queryAll: 'select * from userinfo',
    queryById: 'select * from userinfo where id = ?',
    delete: 'delect from userinfo where id = ?'
}