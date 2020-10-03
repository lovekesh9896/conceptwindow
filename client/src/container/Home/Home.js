import React,{Component} from 'react';
import './Home.css';
import api from '../../API/API';
import ImageDiv from '../../components/ImageDiv/ImageDiv';

class Home extends Component{

    constructor(props){
        super(props);
        const allCookies = document.cookie;
        if(!(allCookies.split("=")[1])){
            this.props.history.replace("/login/greet-user");
        }
    }

    state = {
        userImages : [],
        bigImageUrl : '',
    }

    imageSubmit(){ //upload image to cloudniry server 
        var blobFile = document.getElementsByClassName('filechooser')[0].files[0];
        var formData = new FormData();
        formData.append("fileToUpload", blobFile);
    }

    logOut = () =>{
        document.cookie = "myCat=; Path=/";
        this.props.history.push('/login/greet-user');
    }

    widget = () => {
        return window.cloudinary.createUploadWidget({
            cloudName: 'lovekesh9896', 
            uploadPreset: 'sample'}, (error, result) => { 
                if (!error && result && result.event === "success") { 
                  console.log('Done! Here is the image info: ', result.info); 
                    api.imageUpload(result.info)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
        }).open();
    }

    componentDidMount () {
        api.getImages()
            .then(res => {
                const images = res.data.data.uploads;
                console.log(images);
                const updatedImages = images.map(image => {
                    return {
                        ...image,
                    }
                });
                this.setState({userImages : updatedImages});
            })
            .catch(err => {
                console.log(err);
            })
    }

    ImageSelectedHandler = (url) =>{
        if(this.state.bigImageUrl !== url){
            this.setState({bigImageUrl : url});
        }
    }

    
    render(){
        
        const images = this.state.userImages.map(image => {
            return (
                <ImageDiv 
                    key = {image._id}
                    title={image.original_filename} 
                    url={image.thumbnail_url}
                    clicked={() => this.ImageSelectedHandler(image.url)} />
            )
        })

        return(
            <div className="Home">
                <div className="left">
                    <div className="left-top">
                        {images}
                    </div>  
                    <div className="left-bottom">
                        <button onClick={()=> this.widget()}>Upload Images</button>
                    </div>
                </div>
                <div className="right">
                    {this.state.bigImageUrl ? <img src={this.state.bigImageUrl} alt="Unavailable" /> : (
                        <h2>PLease select an image from uploaded images</h2>
                    )}
                    <button onClick={this.logOut}>log out</button>
                </div>
                
                
            </div>
        )
    }
}

export default Home;