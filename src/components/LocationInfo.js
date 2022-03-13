import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <div className='location-info'>
            <h2>{location.name}</h2>
            <p><b>Type: </b> {location.type}</p>
            <p><b>Dimension: </b>{location.dimension}</p>
            <p><b>Population: </b>{location.residents?.length}</p>
        </div>
    );
};

export default LocationInfo;