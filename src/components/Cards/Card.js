import React, { useEffect, useState ,useContext} from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { UserContext } from '../../App';
//if database then no need fakedata
const fakedata=[
    {
        id:1,
        title:"bedroom flat in Hackney Bridge",
        cost:1420,
        bed:3,
        sofa:1,
        availability:2,
        distance:0.1,
        date:"20/4/21",
        type:"Furnished",
        p1:"Situated on the 12th floor of the Crawford Building this modern one bedroom flat is available to rent end of June.Early viewings are highly recomanded.",
        p2:"This modern appartment featuresan open plan kitchen/living area, a large bathroom and a double sized bedroom with fitted wardrobe. Other benifits include, floor to cdeiling windows and a24 hour concierge service.",
        p3:"The Crawford buildings itself has it's own entrance to Aldgate East Underground station which makes it ideal for transport links"

    },
    {
        id:2,
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
        id:3,
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
const Card = () => {
    const [id, setId] = useContext(UserContext)
    const [rent,setRent]=useState([])
    useEffect(()=>{
        //if database active need to load data from database
        setRent(fakedata)
    },[])

    const onClick=(id)=>{
        setId(id)

    }
    return (
        <div> 
            {
                (rent.length)&&rent.map(srent =><SingleCard key={srent.id} srent={srent} onClick={onClick}></SingleCard>)
            }
        </div>
    );
};

export default Card;