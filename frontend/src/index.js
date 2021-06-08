import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import  reducer  from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FourOhFour } from "./ui/four-oh-four/FourOhFour";
import { Home } from "./ui/home/Home";
import { UserPosts } from "./ui/userPosts/UserPosts";
import { Posts } from "./ui/posts/Posts";
import { configureStore } from '@reduxjs/toolkit'

//In order to use redux a store must be initialized and passed to the Provider component.
const store = configureStore({reducer})

// Routing allows for react to have routed pages.
const Routing = (store) => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/user/:userId" component={UserPosts} userId=":userId"/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/" component={Home}/>
          <Route component={FourOhFour}/>
        </Switch>
      </BrowserRouter>
    </Provider>

  </>
);

ReactDOM.render(Routing(store), document.querySelector("#root"));

