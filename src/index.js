import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import sass và bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sass/main.scss";
// import provider & store
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar component
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignIn from './Containers/Auth/SignIn';
import SignUp from './Containers/Auth/SignUp';

ReactDOM.render(
  <Provider store={store}>
    <Router>
       <Navbar />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/" exact component={App} />
        <Footer />
    </Router>
  </Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
