import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FourOhFour } from "./four-oh-four/FourOhFour";
import { Home } from "./home/Home";
import { UserPosts } from "./userPosts/UserPosts";
import { Posts } from "./posts/Posts";



// Routing allows for react to have routed pages.
export const App = (store) => (
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