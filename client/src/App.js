import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home";
import Form from "./components/Form/Form.jsx";
/* ;
import store from "../store/index.js"; */

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/activities" component={Form} />
      </React.Fragment>
    </Router>
  );
}

export default App;
