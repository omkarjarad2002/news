
import './App.css';

import React,{Component} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar';

export default class app extends Component{
  pagesize = 9;
  apiKey = "08a22034c8bd4231871808b461dd3b9a";
  
  state = {
    progress : 0
  };

  setProgress = (progress)=>{
    this.setState({progress : progress})
  };

  render(){
 
    return(
      <div>
        <Router> 

        <NavBar/> 

        {/* <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
        /> */}
        <Switch>
          <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="general" pagesize = {this.pagesize} country = "us" category ="general" /></Route>  
          <Route exact path="/business"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="business" pagesize = {this.pagesize} country = "us" category ="business" /></Route>  
          <Route exact path="/entertainment"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="entertainment" pagesize = {this.pagesize} country = "us" category ="entertainment" /></Route>  
          <Route exact path="/general"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="general" pagesize = {this.pagesize} country = "us" category ="general" /></Route>  
          <Route exact path="/health"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="health" pagesize = {this.pagesize} country = "us" category ="health" /></Route>  
          <Route exact path="/science"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="science" pagesize = {this.pagesize} country = "us" category ="science" /></Route>  
          <Route exact path="/sports"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="sports" pagesize = {this.pagesize} country = "us" category ="sports" /></Route>  
          <Route exact path="/technology"> <News setProgress={this.setProgress} apiKey={this.apiKey} key ="technology" pagesize = {this.pagesize} country = "us" category ="technology" /></Route>  
        </Switch>
        </Router>
      </div>
    )
  }
}
