import React, { useState } from "react";
import {getForecast} from '../../assets/api';
import CityItem from "../cityItem/CityItem";

function Home(): JSX.Element{
    const [cities, setSities]=useState<string[]>(['Kharkiv', 'Kyiv', 'London', 'New-York', 'Tokio'])

    const x=getForecast;

    return ( 
        <div>
             <h1>Forecast</h1>
             <div className='cities'>
                 {cities.map((el, index)=>(<CityItem key={index} city={el}/>))}
            </div>
            <div>
                <button>Add new city</button>
            </div>
        </div>
        )
    }

export default Home