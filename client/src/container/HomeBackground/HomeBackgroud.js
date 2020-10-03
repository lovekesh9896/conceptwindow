import React,{Component} from 'react';
import axios from 'axios';
import './HomeBackgroud.css';
import BackgroundInfo from '../../components/BackgroundInfo/BackgroundInfo';
import Aux from '../../hoc/aux/Aux';

class homeBackground extends Component {

    state = {
        imageURL : null,
        imageInfo : null
    }

    componentDidMount(){
        let API_URL = "https://api.nasa.gov/planetary/apod?api_key=x4WziBlAhD79yVcKB3lUqZM8PweWr0NgU1wD4Rgo";
        if(!this.state.imageURL){
            axios.get(API_URL)
            .then(response => {
                // console.log(response);
                this.setState({imageURL:response.data.url, imageInfo : response.data}); // change url to hdurl for hd resolution
            });
        }
    }

    render(){
        let Background = <p style={{textAlign:"center"}}>Error in Loading image</p>;
        if(this.state.imageURL){
            Background = <p style={{textAlign:"center"}}>Loading Image...</p>;
        }
        Background = (
            <Aux>
                <div className="Full-Background">
                    <img src={this.state.imageURL} alt="Nasa POD"></img>
                </div>
                <BackgroundInfo imageInfo = {this.state.imageInfo} />
            </Aux>
        )
        return Background;
    }
}

export default homeBackground;