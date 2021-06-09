import React from 'react';
import image from "../images/Rectangle 34.svg"
import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import EmailIcon from '@material-ui/icons/Email';
import LocationDisabledIcon from '@material-ui/icons/LocationDisabled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToilet } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    return (
        <div className="row d-flex justify-content-end align-items-center mx-5 p-1 my-3 text-white w-75" style={{ backgroundColor:"#181219",borderRadius:"10px"}}>
               <div className="col-md-5">
                <img src={image} alt="" className="w-100 img img-fluid my-2" />
                </div>
                <div className="col-md-7 text-start">
                    <h6>{props.srent.bed} {props.srent.title}</h6>
                    <h6>£{props.srent.cost}Pcm</h6>
                <SingleBedIcon className="m-1"></SingleBedIcon>{props.srent.bed}
                <WeekendIcon className="m-1"></WeekendIcon>{props.srent.sofa}
                <FontAwesomeIcon icon={faToilet} className="mx-1"/>{props.srent.availability} <br></br>
                <p><LocationDisabledIcon className="m-1"></LocationDisabledIcon>South Kensington({props.srent.distance}mile)</p>
                <p>Mobe-in-From:{props.srent.date} <EmailIcon className="ms-5" onClick={() => props.onClick(props.srent.id)}></EmailIcon> </p>
                   
                </div>
        </div>
    );
};

export default SingleCard;