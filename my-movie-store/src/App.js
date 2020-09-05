import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/UI/Navbar/Navbar'
import LandingPage from './Containers/LandingPage/LandingPage'
import WatchList from './components/Movies/WatchList'
import MostPopular from './components/Movies/MostPopular'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{backgroundColor: '#14181c'}}>
          <Navbar />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/most-popular" component={MostPopular} />
            <Route path="/watch-list" component={WatchList} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
