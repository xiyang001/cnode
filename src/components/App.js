/**
 * Created by Wenba on 2017/6/7.
 */
import React from 'react'
import Header from './Header'
import PropTypes from 'prop-types'
import Menu from './Meun'
export default class App extends React.Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(){
        super();
        this.state={
            menuShow:false
        }
    }
    componentWillMount(){
        if(this.context.router.location.pathname==='/'){
            this.context.router.push('/home')
        }
        if(this.context.router.location.pathname==='/home'){
            this.context.router.push('/home/all')
        }

    }
    showMenu(){
        this.setState({
            menuShow:true
        })
    }
    hideMenu(){
        this.setState({
            menuShow:false
        })
    }
    render(){
        return (
            <div className="wrap">
                <Header handleClick={this.showMenu.bind(this)}/>
                {this.state.menuShow?<Menu handleClick={this.hideMenu.bind(this)}/>:''}
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}