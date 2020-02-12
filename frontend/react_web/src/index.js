import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/styles.css';
import Login from './pages/login';
import Home from './pages/home';
import Page404 from './pages/Page404';
import Registro from './pages/registro';
import Scooter from './pages/scooter';
import AddScooter from './pages/addScooter';

ReactDOM.render(
<Router>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path= "/registro" component={Registro}/>
      <Route exact path="/home" component={ Home } />
      <Route exact path="/scooter" component={ Scooter } />
      <Route exact path="/gestion_scooter" component={ AddScooter } />
      <Route component={ Page404 } />
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
