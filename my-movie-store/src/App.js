import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/UI/Menu/Menu'
import LandingPage from './Containers/LandingPage/LandingPage'
import WatchList from './components/Movies/WatchList'
import MostPopular from './components/Movies/MostPopular'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/most-popular" component={MostPopular} />
            <Route path="/watch-list" component={WatchList} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
