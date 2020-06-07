import React from 'react';
import {Route,Switch} from "react-router-dom";
import Header from "./components/Header"
import Search from "./components/Search"
import Result from "./components/Results"
import Store from "./components/Store"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Result} />
        <Route exact path="/store/:store_id" component={Store} />
      </Switch>
    </div>
  );
}

export default App;
