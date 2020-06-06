import React from 'react';
import {Route,Switch} from "react-router-dom";
import Header from "./components/Header"
import Search from "./components/Search"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
