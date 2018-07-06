import React from 'react';
import {HashRouter,Route, Switch} from 'react-router-dom';

import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import {Provider} from 'react-redux';
import store from './dux/store';



const routes = (
  <HashRouter>
    <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Auth}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/post/:postid" component={Post}/>
      <Route path="/new" component={Form}/>
    </Switch>
    </Provider>
    </HashRouter>
)

export default routes;