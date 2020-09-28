import React from 'react';
import './GreetUser.css';
// import Aux from '../../hoc/aux/Aux';
const greetUser = (props) => {
    
        return (
            <div className="Greet-user">
                <time className="time">11:22:08</time>
                <h1>
                    Good Night Lovekesh 
                </h1>
            
                <h2>What Is Your Focus For Today?</h2>
                <h2 className="focus">Something Something</h2>
                <div className="Arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
            </div>
            )
        }
        
        export default greetUser;