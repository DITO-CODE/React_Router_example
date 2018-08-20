import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OtraPagina from './OtraPagina';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(

<BrowserRouter>
        <Switch>
            <Route path="/otra/:id?" component={OtraPagina}  />
            <Route path="/" component={App}  />
        </Switch>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
