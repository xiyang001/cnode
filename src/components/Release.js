/**
 * Created by Wenba on 2017/6/15.
 */
import React,{Component} from 'react'

export default class Release extends Component{
    render(){
        return (
            <div className="release">
                <div className="repliesItem">
                    <p><span className="iconfont icon-biaoti"></span>标题</p>
                    <input type="text" placeholder="请输入标题"/>
                </div>
                <div className="repliesItem">
                    <p><span className="iconfont icon-fenlei"></span>分类</p>
                    <select>
                        <option value="">请选择</option>
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">招聘</option>
                    </select>
                </div>
                <div className="repliesItem">
                    <p><span className="iconfont icon-icon2"></span>内容</p>
                    <textarea name="" id="" cols="" rows=""></textarea>
                    <div>
                        <button className="repliesBtn">发布</button>
                    </div>
                </div>
            </div>
        )
    }
}