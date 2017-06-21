/**
 * Created by Wenba on 2017/6/14.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'
import {PropTypes} from 'prop-types'
import logo from '../static/react_logo.jpg'
export default class Menu extends Component{
    static contextTypes={
        router:PropTypes.object.isRequired
    }
    static propTypes = {
        handleClick:PropTypes.func.isRequired
    }
    hideMenu(e){
        e.preventDefault()
        this.props.handleClick()
    }
    menu(){
        setTimeout(()=>{
            this.props.handleClick()
        },300)
    }
    quit(){
        this.context.router.push('/home/all')
        setTimeout(()=>{
            this.props.handleClick()
        },300)
        localStorage.clear();

    }
    render(){
        return (
            <div className="menuWrap">
                <ul className="homeMenu">
                    <li className="menuTitle">
                        <img src={logo} alt=""/>
                        React Cnode
                    </li>
                    <li className="menunav"><Link activeClassName="current" to="/home/all" onClick={this.menu.bind(this)}><span className="iconfont icon-shouye-copy"></span>首页</Link></li>
                    <li className="menunav"><Link activeClassName="current" to="/release" onClick={this.menu.bind(this)}><span className="iconfont icon-fabu"></span>发布</Link></li>
                    <li className="menunav"><Link activeClassName="current" to="/personal" onClick={this.menu.bind(this)}><span className="iconfont icon-geren"></span>个人</Link></li>
                    <li className="menunav"><Link activeClassName="current" to="/login" onClick={this.menu.bind(this)}><span className="iconfont icon-denglu"></span>登录</Link></li>
                    <li className="menunav" onClick={this.quit.bind(this)}><a href="javasctipt:void(0)"><span className="iconfont icon-tuichu"></span>退出</a></li>
                </ul>
                <ul onClick={this.hideMenu.bind(this)}>

                </ul>
            </div>

        )
    }
}