import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import ContactMe from './ContactMe';

class App extends Component {
    render() {
        return(
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Header />
                    <Route exact path={'/'} component={Landing} />
                    <Route exact path={'/contact-me'} component={ContactMe} />
                </div>
            </BrowserRouter>   
        </div>
        );
    
    }
}
export default App;