import React, { useEffect, useState } from 'react';
import SingleCard from '../SIngleCard/SingleCard';
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
        date:"20/4/21"

    },
    {
        id:2,
        title: "bedroom flat in Hackney Bridge",
        cost: 1420,
        bed: 3,
        sofa: 1,
        availability: 2,
        distance: 0.1,
        date: "20/4/21"

    },
    {
        id:3,
        title: "bedroom flat in Hackney Bridge",
        cost: 1420,
        bed: 3,
        sofa: 1,
        availability: 2,
        distance: 0.1,
        date: "20/4/21"

    }
]
const Card = () => {
    const [rent,setRent]=useState([])
    useEffect(()=>{
        //if database active need to load data from database
        setRent(fakedata)
    },[])
    return (
        <div> 
            {
                rent.map(srent=>{<SingleCard key={srent.id} singleRent={srent}></SingleCard> })
            }
        </div>
    );
};

export default Card;