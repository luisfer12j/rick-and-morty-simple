import React from 'react';
import ResidentInfo from './ResidentInfo'

const ResidentsList = (residents) => {
    let res = residents.residents
    console.log([residents])
    return (
        <ul className='residents-list'>
           {res !== undefined && res.map((resident)=>(
                <ResidentInfo resident={resident} key={resident} />
           ))} 
        </ul>
    );
};

export default ResidentsList;