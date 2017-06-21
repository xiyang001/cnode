/**
 * Created by Wenba on 2017/6/15.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class Login extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        this.state={
            token:''
        }
    }
    componentWillMount(){
        var userInfo=localStorage.getItem('userInfo')
        if(userInfo){
            alert("已登录")
            this.context.router.push('/home/all')
        }
    }
    onchangeToken(e){
        this.setState({
            token:e.target.value
        })
    }
    login(){
        fetch('https://cnodejs.org/api/v1/accesstoken',{
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:`accesstoken=${this.state.token}`
        }).then(response => response.json())
            .then(res => {
                if(res.success===true){
                    localStorage.setItem('userInfo',JSON.stringify(res));
                    this.context.router.push('/home/all')
                }
            })
    }
    render(){
        return(
            <div className="login">
                <input type="text" placeholder="请输入token" onBlur={this.onchangeToken.bind(this)}/>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}