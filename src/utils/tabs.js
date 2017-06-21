/**
 * Created by Wenba on 2017/6/20.
 */
const tabs = (str) =>{
    const tabConst = {
        share:"分享",
        ask:"问答",
        job:"招聘",
        good:"精华"
    }
    return tabConst[`${str}`]

}
export default tabs