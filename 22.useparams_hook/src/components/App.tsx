import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import {Service} from './Service';
import {Error} from './Error';
import {Menu} from './Menu';
export const App=()=>{
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact/:fname/:lname" component={Contact} />
            <Route exact path="/Service" component={()=> <Service name="Software Development"/>} />
            <Route  component={Error} />
        </Switch>
        </>
    );

}