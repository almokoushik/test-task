import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
  

const GoogleMap = (props) => {   
    const [position,setPosition]=useState({
        //default parameter
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    })
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={position.center}
                defaultZoom={position.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;