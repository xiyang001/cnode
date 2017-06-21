/**
 * Created by Wenba on 2017/6/21.
 */
const formatDate = (str) => {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime()
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000),10) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000),10) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000,10) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000,10) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000,10) + '月前'
    } else {
        return parseInt(time / 31536000000,10) + '年前'
    }
}
export default formatDate;