import React from "react";
import Home from './components/home/home'
import Marketplace from '../src/components/marketplace/marketplace'
import "./App.css";
import {BrowserRouter as Router,Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/marketplace" component={Marketplace} exact={true}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
