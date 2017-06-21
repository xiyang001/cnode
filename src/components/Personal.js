/**
 * Created by Wenba on 2017/6/15.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Personal extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        this.state={
            userInfo:{}
        }
    }
    componentWillMount(){
        var userInfo=localStorage.getItem('userInfo')
        if(userInfo){
            this.setState({
                userInfo:JSON.parse(userInfo)
            })
        }else{
            this.context.router.push('/login')
        }
    }
    render(){
        const { userInfo } = this.state;
        return (
            <div className="personal">
                <div className="personalInfo">
                    <img src={userInfo.avatar_url} alt=""/>
                    <h1>{userInfo.loginname}</h1>
                </div>
                <ul>
                    <li><span className="iconfont icon-jinlingyingcaiwangtubiao96"></span><span>我的消息</span><span className="iconfont icon-jiantou"></span></li>
                    <li><span className="iconfont icon-fabu"></span><span>发布主题</span><span className="iconfont icon-jiantou"></span></li>
                </ul>
            </div>
        )
    }
}