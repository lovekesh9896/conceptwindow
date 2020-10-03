import React,{Component} from 'react';
import './GreetUser.css';
import SVG from '../../components/UI/SVG/SVG';
class greetUser extends Component{

    constructor(props){
        super(props);
        // we will use cookie to see if user is logged in or not
        // currently this does not check if cookie is valid
        const allCookies = document.cookie;
        if(allCookies.split("=")[1]){
            this.state = {
                isUserLoggedIn : true,
                currTime : "11:22:08",
                name : 'User',
                intervalID : '',
            }
        }else{
            this.state = {
                isUserLoggedIn : false,
                currTime : "11:22:08",
                name : 'User',
                intervalID : '',
            }
        }
    }

    addZero = (n) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    timeChangeHandler = () => {
        let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
        hour = hour % 12 || 12;
    
        var time = `${hour}:${this.addZero(min)}:${this.addZero(sec)} `;
        this.setState({currTime : time});
    }

    timeHandler = () => {
        let interval = setInterval(this.timeChangeHandler, 1000);
        return interval;
    }


    componentDidMount(){
        let interval = this.timeHandler();
        this.setState({intervalID : interval});
        let newName = localStorage.getItem('name');
        if(newName && newName !== this.state.name){
            this.setState({name : newName});
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalID);
    }

    goToAfterClicking =  () => {
        if(this.state.isUserLoggedIn){
            this.props.history.replace('/home');
        }else{
            this.props.history.replace('/login/enter-pass');
        }
    }

    render(){

        return(
            <div className="Greet-user">
                <time className="time">{this.state.currTime}</time>
                <h1>
                Good Night {this.state.name} 
                </h1>
                
                <h2>What Is Your Focus For Today?</h2>
                <h2 className="focus">Something Something</h2>
                <div className="Arrow" onClick={this.goToAfterClicking}>
                    {SVG.rightArrow}
                </div>
            </div>
        )
    }
}
export default greetUser;