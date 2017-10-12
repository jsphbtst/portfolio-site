import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import ContactMe from './ContactMe';

class App extends Component {
    render() {
        return(
        <div className="App">
            <Router>
                <div>
                    <Header />
                    <Route exact path={'/'} component={Landing} />
                    <Route exact path={'/contact-me'} component={ContactMe} />
                </div>
            </Router>   
        </div>
        );
    
    }
}
export default App;