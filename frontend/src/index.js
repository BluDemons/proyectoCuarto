import React from 'react';
import {render} from 'react-dom';
//import './styles/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admins';
import AddsScooter from './pages/addScooter';
import VirtualLibrary from './pages/virtualLibrary';
import Config from './pages/config';
import Page404 from './pages/Page404';
import Inicio from './pages/inicio';

render(<Router>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ Home } />
      <Route path="/admins" component={ Admin } />
      <Route path="/add_book" component={ AddsScooter } />
      <Route path="/virtual_library" component={ VirtualLibrary } />
      <Route path="/config" component={ Config } />
      <Route path="/inicio" component={Inicio}/>
      <Route component={ Page404 } />
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
