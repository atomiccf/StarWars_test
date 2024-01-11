import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import axios, {AxiosResponse} from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Details} from "../../Interfaces.ts";
import './InfoPage.css'


const InfoPage: React.FC = () => {
    const {index} = useParams();
    const location = useLocation();
    const {name, gender, mass, films, starships, species} = location.state;
    const [starshipState, setStarship] = useState<AxiosResponse[]>([]);
    const [speciesState, setSpecies] = useState<AxiosResponse[]>([]);
    const color = {color: 'gold'};
    const texStyle = {color: 'gold', marginBottom:'20px', fontsize:'25px' };
    const cardStyle = {width: '100%', height:'100vh', backgroundColor:'black'};


    const characterDetails: Details = {
        id: index,
        name: name,
        gender: gender,
        mass: mass,
        films: films,
        starships: starships,
        species: species,
    };

    const fetchStarships = async () => {
        try {
            const response = await axios.all(characterDetails.starships.map((endpoint) => axios.get(endpoint))).then(
                (data) => data)

            setStarship(response)
            console.log(starshipState)

        } catch (e) {
            console.log(e)
        }
    }

    const fetchSpecies = async () => {
        try {
            const response = await axios.all(characterDetails.species.map((endpoint) => axios.get(endpoint))).then(
                (data) => data);

           setSpecies(response);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (characterDetails.starships) {
            fetchStarships();
        }

        if (characterDetails.species) {
            fetchSpecies();
        }

    }, []);

    return (
        <Card sx={cardStyle}>
            <CardContent>
                <Typography  gutterBottom sx={color} variant="h3" component="div">
                    {characterDetails.name}
                </Typography>
                <Typography sx={color} gutterBottom variant="h6" component="div">
                    Mass: {characterDetails.mass}
                </Typography>
                <Typography  gutterBottom sx={color} variant="h6" component="div">
                    Gender: {characterDetails.gender}
                </Typography>
                <Typography sx={texStyle} variant="body2" >
                    <h3>Films:</h3>
                    <ul>
                     {films.map((item: string, index: number) => (<li key={index}>{item.title}</li>))}
                    </ul>
                </Typography>

                {starshipState &&
                    <Typography sx={texStyle} variant="body2" >
                        <h3>Starships:</h3>
                        <ul>{starshipState.map((item, index: number) => <li key={index}>{item.data.name}</li>)}</ul>
                    </Typography>
                }

                {!starshipState &&
                    <Typography sx={texStyle} variant="body2" >
                        <h3>Starships:</h3>
                        Starships:
                        None
                    </Typography>
                }

                {speciesState &&
                    <Typography sx={texStyle} variant="body2" color="text.secondary">
                        <h3>Species:</h3>
                        <ul>{speciesState.map((item, index: number) => <li
                            key={index}>{item.data.name} {item.data.classification}</li>)}</ul>
                    </Typography>
                }
                {!speciesState &&
                    <Typography sx={texStyle} variant="body2" color="text.secondary">
                        <h6>Species:</h6>
                    </Typography>
                }
            </CardContent>
        </Card>
    );
};

export default InfoPage;