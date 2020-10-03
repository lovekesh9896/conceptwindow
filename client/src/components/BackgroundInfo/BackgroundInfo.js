import React from 'react';
import './BackgroundInfo.css';
import SVG from '../UI/SVG/SVG';

const backgroundInfo = (props) => {
    let imageTitle = "NA";
    let imageDate = "NA";
    let imageAuthor = "NA";
    if(props.imageInfo){
        imageTitle = props.imageInfo.title;
        imageDate = props.imageInfo.date;
        imageAuthor = props.imageInfo.copyright;
    }
    return (
        <div className="Background-info">
            {SVG.questionMark}
            <div className="Background-by">
            <p><strong>{imageTitle}</strong></p>
            <span>By {imageAuthor} on {imageDate}</span>
            </div>
        </div>
    )
}

export default backgroundInfo;
