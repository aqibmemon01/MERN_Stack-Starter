import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import TodosList from "./components/Starter";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <Header title="MERN-Stack Todo App" link1="Todos" link2 = "Create Todo"></Header>

          <Route path="/" exact component={TodosList} />
        </div>
      </Router>
    );
  }
}

export default App;