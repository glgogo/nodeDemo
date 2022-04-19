function dataFormat(dt) {

    var YY = dt.getFullYear();
    var MM = addZero(dt.getMonth() + 1);
    var DD = addZero(dt.getDate());

    var hh = addZero(dt.getHours());
    var mm = addZero(dt.getMinutes());
    var ss = addZero(dt.getSeconds());
    // 使用模板字符串方式返回格式化后的时间
    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
}
// 定义小于10时补零函数
function addZero(d) {
    return d < 10 ? '0' + d : d;
}
// 将dataFormat函数暴露出去
module.exports = {
    dataFormat
}