import React from 'react';
import {Route,BrowserRouter, Switch,Redirect} from 'react-router-dom';
import Window from './container/Window/Window';
import Home from './container/Home/Home';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Window}/>
                    {/* if path is "/" or any other we will rdirect to greet user */}
                    <Redirect to='/login/greet-user'/>; 
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

