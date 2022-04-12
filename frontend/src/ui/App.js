import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FourOhFour } from "./four-oh-four/FourOhFour";
import { Home } from "./home/Home";
import { UserPosts } from "./userPosts/UserPosts";
import { Posts } from "./posts/Posts";



// Routing allows for react to have routed pages.
export const App = ({store}) => (
    <>
        <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/user/:userId" element={<UserPosts />} userId=":userId"/>
                    <Route exact path="/posts" element={<Posts />}/>
                    <Route exact path="/" element={<Home />}/>
                    <Route element={FourOhFour}/>
                </Routes>
            </BrowserRouter>
        </Provider>
        </React.StrictMode>

    </>
);