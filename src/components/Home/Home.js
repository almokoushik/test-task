import React, { useContext } from 'react';
import { UserContext } from '../../App';
import CardDetail from '../CardDetail/CardDetail';

import Card from '../Cards/Card';
import MenuBar from '../MenuBar/MenuBar';
import SIdeBar from '../SIdeBar/SIdeBar';

const Home = () => {
    const [id, setId] = useContext(UserContext)
    console.log(id)
    
    return (
        <div className="row d-flex justify-content-center">
            {/* style={{ backgroundColor: "#201B20" }} */}
            <div className="col-md-3 my-5 py-3" >
                <SIdeBar></SIdeBar>
            </div>
            <div className="col-md-9">
                <MenuBar></MenuBar>
                {
                    !id ? <Card></Card>:<CardDetail key={id}></CardDetail>
                }

            </div>
            
        </div>
    );
};

export default Home;