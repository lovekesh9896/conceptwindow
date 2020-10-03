import React,{Component} from 'react';
import Aux from '../../hoc/aux/Aux';
import HomeBackground from '../HomeBackground/HomeBackgroud';
import GreetUser from '../GreetUser/GreetUser';
import './Window.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import EnterPass from '../EnterPass/EnterPass';
class window extends Component{
    
    render(){
        return(
            <Aux>
                <HomeBackground />
                <Switch>
                    <Route path="/login/greet-user" exact component={GreetUser} />
                    <Route path="/login/enter-pass" exact component={EnterPass} />
                    {/* if path is any other we will redirect to greet user */}
                    {/* we can also use error page which through 404 page not found */}
                    <Redirect to="/login/greet-user" />
                </Switch>

            </Aux>
        )
    }
}

export default window;