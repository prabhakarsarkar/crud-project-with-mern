import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Signup from './components/signup';
import Login from './controller/Login';
import Table from './controller/Product.Table';
import Signup from './controller/Signup';
import PrivateRoute from '../src/HOC/PrivateRoute'
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute  path="/product" component={Table} />
          {/* <PrivateRoute path="/orders" component={Orders}/> 
          <PrivateRoute path="/admin" component={AdminDetails}/>
          <PrivateRoute path="/" component={AdminDetails}/>  
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/product" component={Product} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
