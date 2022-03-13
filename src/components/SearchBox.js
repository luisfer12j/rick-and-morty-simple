import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setLocation}) => {
    const [search, setSearch]=useState('')
    const doSearch = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res=>{setLocation(res.data)})
    }
    return (
        <div className='search-box'>
            <input type="text" onChange={e=>setSearch(e.target.value)} value={search} placeholder='Search by id'/>
            <button onClick={doSearch}>Search</button>
        </div>
    );
};

export default SearchBox;