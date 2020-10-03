import React from 'react';
import './ImageDiv.css';

const ImageDiv = (props) => {

    return(
        <div onClick={props.clicked} className="ImageDiv">
            <img src={props.url} alt="Your Uploads" />
            <div className="image-container">
                <h5>{props.title}</h5>
            </div>   
        </div>
    )
}

export default ImageDiv;