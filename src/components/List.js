/**
 * Created by Wenba on 2017/6/15.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import formatDate from '../utils/formatDate'
import tabs from '../utils/tabs'
import Top from './Top'

export default class List extends Component{
    static propTypes={
        items:PropTypes.array.isRequired
    }
    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    handleClick(id){
        this.context.router.push(`/detail/${id}`)
    }
    render(){
        const { items } = this.props
        return (
            <ul className="itemwrap">
                {items.map((item,index) => {
                    return <li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
                        <div className="list">
                            <img src={item.author.avatar_url} alt=""/>
                            <div>
                                <div>
                                    <span>{item.author.loginname}</span>
                                    <span className="time">{formatDate(item.last_reply_at)}</span>
                                </div>
                                <p className="title"><Top top={item.top} good={item.good}/>{item.title}</p>
                            </div>
                        </div>
                        <div className="tag">
                            <span><span className="iconfont icon-pinglun"></span>{item.reply_count}</span>
                            <span><span className="iconfont icon-fangwen"></span>{item.visit_count}</span>
                            <span><span className="iconfont icon-tag"></span>{tabs(item.tab)}</span>
                        </div>
                    </li>
                })}
            </ul>
        )
    }
}