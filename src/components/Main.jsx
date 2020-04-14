import React from 'react';
import MainNav from "./NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../pages/Home';
import Footer from './MainFooter';
import { Container } from "reactstrap";


class Main extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <MainNav />

                <Router>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/profile" component={HomePage} />
                    <Route path="/profile" component={ProfilePage} /> */}
                </Router>
                
                <Footer />
             
            </>
         );
    }
}
 
export default Main;