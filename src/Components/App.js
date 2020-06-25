import React, {Component} from 'react';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Shop from './Shop'
import ProductKit from './ProductKit';
import ProductRocket from './ProductRocket';
import ProductProgram from './ProductProgram';
import ProductTemp from './ProductTemp';

class App extends Component{
  render(){
    return (
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop/kits/:id" component={ProductKit} />
            <Route exact path="/shop/rocket/:id" component={ProductRocket} />
            <Route exact path="/shop/program/:id" component={ProductProgram} />
            <Route exact path="/shop/academia" component={ProductTemp} />
          </Switch>
          <Footer />
        </div>
    );
  }
  
}

export default App;
