/**
 * Created by Wenba on 2017/6/15.
 */
import React,{Component} from 'react'
import List from '../List'

export default class Ask extends Component{
    constructor(){
        super();
        this.state={
            contentList:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1&tab=ask&limit=20')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    contentList:res.data
                })
            })
    }
    render(){
        return (
            <List items={this.state.contentList}/>
        )
    }
}