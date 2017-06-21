import React,{Component} from 'react'
import {PropTypes} from 'prop-types'
import logo from '../static/cnodejs_light.svg'
export default class Header extends Component{
    static propTypes={
        handleClick:PropTypes.func.isRequired
    }
    changeMenu(){
        this.props.handleClick()
    }
    render(){
        return (
            <div className="header">
                <span className="iconfont icon-caidan menu" onClick={this.changeMenu.bind(this)}></span>
                <img src={logo} alt="" className="logo"/>
            </div>
        )
    }
}