/**
 * Created by Wenba on 2017/6/15.
 */
import React ,{Component} from 'react'
import PropTypes from 'prop-types'
import logo from '../static/cnodejs_light.svg'
import Top from './Top'
import tabs from '../utils/tabs'
import formatDate from '../utils/formatDate'

export default class Detail extends Component{
    static contextTypes ={
        router:PropTypes.object.isRequired
    }
    constructor(){
        super();
        this.state={
            loading:true,
            content:{}
        }
    }
    componentDidMount(){
        const router=this.context.router;
        const id=router.params.id
        fetch(`https://cnodejs.org/api/v1/topic/${id}`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    content:res.data,
                    loading:false
                })
            })
    }
    render(){
        const { content } = this.state
        return(
        <div className="detailWrap">
            {this.state.loading ? 
                'loading......' : 
                <div className="detail">
                    <div className="detailHeader">
                        <span className="iconfont icon-fanhui"onClick={this.context.router.goBack}></span>
                        <img src={logo} alt="" className="logo"/>
                    </div>
                    <div className="detailContent">
                        <div className="contentTitle">
                            <div className="userInfo">
                                <img src={content.author.avatar_url} alt=""/>
                                <div>
                                    <p>{content.author.loginname}</p>
                                    <p className="tabs">#{tabs(content.tab)}#</p>
                                    <p className="createdTime">楼主 发表于{formatDate(content.last_reply_at)}</p>
                                </div>
                            </div>
                            <div className="collection">
                                <button>收藏</button>
                            </div>
                        </div>
                        <div className="contentBody">
                            <div className="itemTitle">
                                <Top top={content.top} good={content.good}/>
                                {content.title}
                            </div>
                            <div className="itemContent" dangerouslySetInnerHTML={{__html:content.content}}>

                            </div>
                        </div>
                        <div className="repliesList">
                            <h3>评论区：</h3>
                            <ul>
                                {content.replies.map((item,index) => {
                                    return <li key={index} className="replies">
                                        <img src={item.author.avatar_url} alt="" className="userimg"/>
                                        <div className="repliesInfo">
                                            <div className="repliesUser">
                                                <div>
                                                    <p>{item.author.loginname}</p>
                                                    <p>{index}楼.发表于{formatDate(item.create_at)}</p>
                                                </div>
                                                <div>
                                                    <span className="iconfont icon-zan"></span>
                                                </div>
                                            </div>
                                            <div dangerouslySetInnerHTML={{__html:item.content}} className="repliesCont"></div>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>)
    }
}