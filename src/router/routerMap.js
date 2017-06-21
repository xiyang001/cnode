/**
 * Created by Wenba on 2017/6/7.
 */
import React,{Component} from 'react'
import {Router,Route,hashHistory} from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import All from '../components/homePage/All'
import Good from '../components/homePage/Good'
import Ask from '../components/homePage/Ask'
import Share from '../components/homePage/Share'
import Job from '../components/homePage/Job'
import Release from '../components/Release'
import Personal from '../components/Personal'
import Login from '../components/Login'
import Detail from '../components/Detail'
export default class RouterMap extends Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="home" component={Home}>
                        <Route path="all" component={All} />
                        <Route path="good" component={Good} />
                        <Route path="ask" component={Ask} />
                        <Route path="share" component={Share} />
                        <Route path="job" component={Job} />
                    </Route>
                    <Route path="release" component={Release}/>
                    <Route path="personal" component={Personal}/>
                    <Route path="login" component={Login}/>
                </Route>
                <Route path="detail/:id" component={Detail} />
            </Router>
        )
    }
}