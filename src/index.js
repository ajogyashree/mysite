import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Mainbody } from './component/mainbody.component';
import { About } from './component/about.component';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' render={() => <App content={ <Mainbody/> } /> } exact={true} />
            <Route path='/about' render={ () => <App content={ <About/> } /> }  exact={true} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('jsr')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
