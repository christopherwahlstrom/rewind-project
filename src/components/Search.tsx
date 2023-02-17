import './search.scss'
import { PlayerDis } from '../models/data';
import React from 'react';

interface Props {
    players: PlayerDis[];
    doSearch: (event: any) => void;
}


function Search({players, doSearch}: Props ) {
    

    return (
        <section className='search'>
            <input className='search-field' placeholder='Search words: Name, Win, Lost, Date' 
            onChange={doSearch}  />
        </section>
    )
}

export default Search;