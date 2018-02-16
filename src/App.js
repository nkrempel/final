import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css' /* Need to copy this */
import TopNews from './TopNews';
import Categories from './Categories';
import Feed from './Feed';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

//since the heading and nav are on all pages, adding that to main App component
//create separate components for the lists: Top News, Categories/sources, Personal feed
class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <div className="top-bar">
            <span className="App-title">News Me!</span>
            <span className="app-nav">
              <ul className="tabs">
                <li className="tab-title"><button className="nav-btn">Home</button></li>
                <li className="tab-title"><button className="nav-btn">Customize</button></li>
                <li className="tab-title"><button className="nav-btn">Personal Feed</button></li>
              </ul>   
            </span>

          </div>
            <Switch>
              <Route exact path="/" component={TopNews} />
              <Route path="/categories" component={Categories} />
              <Route path="/feed" component={Feed} />
            </Switch>
          <div className="main-body">
            <TopNews />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
