import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import ContactMe from './ContactMe';

class App extends Component {
    render() {
        return(
        <div className="App">
            <Header />
            <BrowserRouter>
                <div>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL}/contact-me`} component={ContactMe} />
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing}/>
                </Switch>
                </div>
            </BrowserRouter> 
        </div>
        );
    }
}
export default App;