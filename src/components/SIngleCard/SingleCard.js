import React from 'react';
import image from "../images/Rectangle 34.svg"

const SingleCard = (props) => {
    return (
            <div className="row d-flex justify-content-center align-items-center">
                <h1>This is SingleCard</h1>
                <div className="col-md-5 text-end">
                    <img src={image} alt="" className="w-75 img img-fluid" />
                </div>
                <div className="col-md-7 text-start">
                    <h3>{props.srent.bed} {props.srent.title}</h3>
                    <h3>£{props.srent.cost}Pcm</h3>
                </div>
        </div>
    );
};

export default SingleCard;