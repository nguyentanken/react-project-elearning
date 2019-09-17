import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/navbar';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Routers from './Routers';


function App() {
  
  let elmRoute = Routers.map((route, index) => {
    return <Route key={index} path={route.path} exact={route.exact} component={ route.componentRoute } />
  })
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Carousel />
        <Switch>
          { elmRoute }
        </Switch>
        <Footer />
      </div>      
    </Router>
  );
}

export default App;
