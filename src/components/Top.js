/**
 * Created by Wenba on 2017/6/21.
 */
import React ,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Top extends Component{
    static propTypes={
        top:PropTypes.bool.isRequired,
        good:PropTypes.bool.isRequired
    }
    render(){
        const {top,good} = this.props;
        return (
            <span>
                {top? <span className="iconfont icon-top"></span>:''}
                {!top&&good? <span className="iconfont icon-jinghua"></span>:''}
            </span>
        )
    }
}