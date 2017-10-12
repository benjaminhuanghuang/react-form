import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

// App modules
import Home from './components/Home';
import Header from './components/Header';
import AgeTeller from './components/AgeTeller';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/ageteller" component={AgeTeller}/>
      </div>
    </BrowserRouter>,
    document.getElementById('root')
);