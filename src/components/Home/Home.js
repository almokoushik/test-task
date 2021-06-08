import React from 'react';
import Card from '../Cards/Card';
import MenuBar from '../MenuBar/MenuBar';
import SingleCard from '../SIngleCard/SingleCard';

const Home = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 text-white" style={{ backgroundColor:"#201B20"}}>
                <h1>This is First Col</h1>
            </div>
            <div className="col-md-9">
                <MenuBar></MenuBar>
                <h1>This is ANother col</h1>
                <Card></Card>
                {/* <SingleCard></SingleCard> */}
            </div>
            
        </div>
    );
};

export default Home;