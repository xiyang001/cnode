/**
 * Created by Wenba on 2017/6/7.
 */
import React,{Component} from 'react'
import {Link} from 'react-router'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            contentList:[]
        }
    }

    render(){
        return (
           <div className="home">
               <ul className="class">
                   <li><Link to="/home/all" activeClassName="active">全部</Link></li>
                   <li><Link to="/home/good" activeClassName="active">精华</Link></li>
                   <li><Link to="/home/ask" activeClassName="active">问答</Link></li>
                   <li><Link to="/home/share" activeClassName="active">分享</Link></li>
                   <li><Link to="/home/job" activeClassName="active">招聘</Link></li>
               </ul>
               {this.props.children}
              {/*<List items={this.state.contentList}/>*/}
           </div>
        )
    }
}