import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import {About} from './About';
import {Error} from './Error';
import {Menu} from './Menu';

export const App=()=>{
    return(
        <>
        <Menu/>
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/Contact" render={()=><Contact name="Zakir Hossain"/>}/>
           <Route exact path="/About" component={About}/>
           <Route component={Error}/>
        
        </Switch>
        </>
    
    );

}