import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import {Menu} from './Menu';
import {Service} from './Service';
import {About} from './About';

export const App=()=>{
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Contact" component={Contact}/>     
            <Route exact path="/Service" component={Service}/>     
            <Route exact path="/About" component={About}/>     
        </Switch>
        </>
    );

}