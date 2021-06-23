import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form.jsx";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/country/:id" component={CountryDetail} />
        <Route exact path="/activities" component={Form} />
      </React.Fragment>
    </Router>
  );
}

export default App;
