import React,{Component} from 'react';
// import axios from 'axios';
import Aux from '../../hoc/aux/Aux';
import HomeBackground from '../../components/HomeBackground/HomeBackgroud';
import GreetUser from '../../components/GreetUser/GreetUser';
import './Window.css';

class window extends Component{

    render(){
        return(
            <Aux>
                <HomeBackground />
                <GreetUser />
            </Aux>
        )
    }
}

export default window;