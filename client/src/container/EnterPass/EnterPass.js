import React,{Component} from 'react';
import './EnterPass.css'
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Aux from '../../hoc/aux/Aux';
import api from '../../API/API';
import Spinner from '../../components/UI/Spinner/Spinner';
import SVG from '../../components/UI/SVG/SVG';
class EnterPass extends Component {

    constructor(props){
        super(props);
        const allCookies = document.cookie;
        if(allCookies.split("=")[1]){
            this.props.history.replace("/login/greet-user");
        }
    }

    state = {
        signup : false,
        error : '',
        spinner : false
    }

    signupSigninSwitchHandler = () => { 
        this.setState(prev => ({
            signup : !prev.signup
        }))
    }

    userAuthHandler = (event) => { // used for sign in
        event.preventDefault(); 
        this.setState({spinner : true});
        const cred = {
            'email' : document.getElementById('email-input').value,
            'pass' : document.getElementById('pass-input').value,
        }
        api.authUser(cred)
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    const token = res.data.data.token;
                    document.cookie = `myCat=${token};Path=/`;
                    this.props.history.push('/home');
                }else{
                    this.setState({error : res.data.message});
                }
                this.setState({spinner : false});
                
            })
            .catch(err => {
                console.log(err.status);
                this.setState({spinner : false});
                this.setState({error : "Something went wrong"});
            })
    }

    userCreateHandler = (event) => { // used for sign up
        event.preventDefault();
        this.setState({spinner : true});
        const cred = {
            'email' : document.getElementById('email-input').value,
            'pass' : document.getElementById('pass-input').value,
            'name' : document.getElementById('name-input').value,
        }
        api.createUser(cred)
            .then(res => {
                this.setState({spinner : false , signup : false});
            })
            .catch(err => {
                this.setState({spinner : false});
            })
    }


    render(){
        
        let form = ( // form for sign in 
            <div>
                <form autoComplete="off" onSubmit={this.userAuthHandler}>
                    <div className="pass-input-div">
                        {SVG.user}
                        {SVG.rightArrow}
                        <input id="email-input" type="email" name="email" placeholder="Name" required/>
                    </div>
                    <div className="pass-input-div">
                        {SVG.pass}
                        {SVG.rightArrow}
                        <input id="pass-input" type="password" name="pass" placeholder="Password" required/>
                    </div>
                    {/* spinner is shown when credntials are being verified */}
                    {this.state.spinner ? <Spinner /> : <button>
                        Submit
                        {SVG.rightArrow}
                    </button> }
                </form>
                <div className="sign-up-and-forgot">
                    <button onClick={this.signupSigninSwitchHandler}>SIGNUP NOW</button>
                    <button style={{opacity:'0.8'}}>Forget Password?</button>    
                </div>
            </div>
        )

        if(this.state.signup){ // form for sign up
            form = (<div>
                        <form autoComplete="off" onSubmit={this.userCreateHandler}>
                            <div className="pass-input-div">
                                {SVG.user}
                                {SVG.rightArrow}
                                <input id="name-input" type="text" name="name" placeholder="Name" required/>
                            </div>
                            <div className="pass-input-div">
                                {SVG.mail}
                                {SVG.rightArrow}
                                <input id="email-input" type="email" name="email" placeholder="Email" required/>
                            </div>
                            <div className="pass-input-div">
                                {SVG.pass}
                                {SVG.rightArrow}
                                <input type="password" id="pass-input" name="pass" placeholder="Password" required/>
                            </div>
                            {this.state.spinner ? <Spinner /> : <button>
                                Submit
                                {SVG.rightArrow}    
                            </button> }
                        </form>
                        <div className="sign-up-and-forgot">
                            <button onClick={this.signupSigninSwitchHandler}>SIGNIN NOW</button>
                        </div>
                    </div>
            )
        }

        return (
            <Aux>
            <Backdrop show />
            <div className="EnterPass">
                <div className="hr">Concept Window</div>
                <span style={{fontSize : '12px'}}>{this.state.error}</span>
                <p style={{marginBottom:'0'}}>{!this.state.signup ? "Secure Login" : "Secure Signup" }</p>
                <hr align="left"></hr>
                {form}
            </div>
        </Aux>
        )
    }
}

export default EnterPass;