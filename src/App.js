import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Signup from '../src/components/signup'; 
import CryptoTable from"../src/components/CryptoTable";
const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Order} /> */}
        <Route path="/" component={CryptoTable} />
      </Switch>
    </Router>
  );
};

export default App;
