import React from 'react';
import {Route,Switch} from "react-router-dom";
import Header from "./components/Header"
import Search from "./components/Search"
import Result from "./components/Results"
import Store from "./components/Store"
import Signup from "./components/Signup"
import Business from "./components/Business"
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/results" component={Result} />
        <Route exact path="/store/:store_id" component={Store} />
      </Switch>
    </div>
  );
}

export default App;
