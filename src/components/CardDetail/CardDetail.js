import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import image from "../images/Rectangle 34.svg"
import CloseIcon from '@material-ui/icons/Close';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import WeekendIcon from '@material-ui/icons/Weekend';
import EmailIcon from '@material-ui/icons/Email';
import LocationDisabledIcon from '@material-ui/icons/LocationDisabled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToilet } from '@fortawesome/free-solid-svg-icons'
import GoogleMap from '../GoogleMap/GoogleMap';
import Divider from '@material-ui/core/Divider';
import ImageCar from '../ImageCar/ImageCar';

const fakedata = [
    {
        id: 1,
        title: "bedroom flat in Hackney Bridge",
        cost: 1420,
        bed: 3,
        sofa: 1,
        availability: 2,
        distance: 0.1,
        date: "20/4/21",
        type: "Furnished",
        p1: "Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June.Early viewings are highly recomanded.",
        p2: "This modern appartment featuresan open plan kitchen/living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benifits include, floor to cdeiling windows and a24 hour concierge service.",
        p3: "The Crawford buildings itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links"

    },
    {
        id: 2,
        title: "bedroom flat in Hackney Bridge",
        cost: 1420,
        bed: 3,
        sofa: 1,
        availability: 2,
        distance: 0.1,
        date: "20/4/21",
        type: "Furnished",
        p1: "Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June.Early viewings are highly recomanded.",
        p2: "This modern appartment featuresan open plan kitchen/living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benifits include, floor to cdeiling windows and a24 hour concierge service.",
        p3: "The Crawford buildings itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links"

    },
    {
        id: 3,
        title: "bedroom flat in Hackney Bridge",
        cost: 1420,
        bed: 3,
        sofa: 1,
        availability: 2,
        distance: 0.1,
        date: "20/4/21",
        type: "Furnished",
        p1: "Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June.Early viewings are highly recomanded.",
        p2: "This modern appartment featuresan open plan kitchen/living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benifits include, floor to cdeiling windows and a24 hour concierge service.",
        p3: "The Crawford buildings itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links"

    }
]

const CardDetail = () => {
    const [id,setId]=useContext(UserContext)
    const [rent,setRent]=useState({})
    useEffect(async ()=>{
        await setRent(fakedata.find(data=>data.id===id))

    },[])

    const handleClick=()=>{
        setId(false)
    }

    return (
    <div className="row d-flex justify-content-center align-items-center mx-5 px-5 my-3 text-white w-75" style={{ backgroundColor: "#181219", borderRadius: "10px" }}>
           <div className="row"> 
                <h1 className="text-end"><CloseIcon onClick={() => handleClick()}></CloseIcon></h1>
           
           </div>
         <div className="row my-5">
                    {/* <img src={image} alt="" className=" img img-fluid" /> */}
                    <ImageCar></ImageCar>
         </div>
        <div className="text-start">
                    <h3>{rent.bed} {rent.title}</h3>
                    <h3>£{rent.cost}Pcm</h3>
                    <div className="row d-flex justify-content-center align-items-center">

                    <div className="col-md-3">
                    <SingleBedIcon className="m-1"></SingleBedIcon>{rent.bed}
                    <WeekendIcon className="m-1"></WeekendIcon>{rent.sofa}
                    <FontAwesomeIcon icon={faToilet} className="mx-1" />{rent.availability} <br></br>                   
                    </div>

                    <div className="col-md-4">
                    <p><LocationDisabledIcon></LocationDisabledIcon>South Kensington({rent.distance}mile)</p>
                    </div>

                    <div className="col-md-3"><p>Mobe-in-From:{rent.date}</p></div>

                    <div className="col-md-2"><p>{rent.type}</p></div>
                </div>
        </div>
            <Divider style={{fontSize:"20px",color:"red"}}></Divider>
            <div className="row"><GoogleMap></GoogleMap></div>
            <div className="row text-start my-5">
                <p>{rent.p1}</p>
                <p>{rent.p2}</p>
                <p>{rent.p3}</p>
            </div>


            </div>
    );
};

export default CardDetail;