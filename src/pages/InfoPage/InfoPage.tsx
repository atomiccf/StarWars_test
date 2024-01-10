import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import './InfoPage.css'

type Details = {
    id:string|undefined,
    name:string|undefined,
    gender:string|undefined,
    mass:number|undefined,
    films:[]|undefined,

}


const EventDetailsPage:React.FC = () => {
    const { index } = useParams();
    const location = useLocation();
    const { name,gender,mass,films} = location.state;



   const characterDetails:Details = {
        id: index,
        name: name,
        gender: gender,
        mass:mass,
        films:films,
    };

    return (
        <>
            <div className='event-card'>
                <h2>{characterDetails.name}</h2>
                <span>Gender: {characterDetails.gender}</span>
                <span>Mass: {characterDetails.mass}</span>
                <ul>
                    {films.map((item:string, index:number) =>(<li key={index}>{item.title}</li>))}
                </ul>

            </div>
        </>

    );
};

export default EventDetailsPage;