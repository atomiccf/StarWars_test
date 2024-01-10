import React from "react";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {List, ListItemButton, Typography} from '@mui/material';
import {Result} from "../../Interfaces.ts";



const CharacterList: React.FC = () => {

    const characters = useSelector((state) => state.characters.result);
    console.log(characters);

    return (
        <>
            {characters.length === 0 && <div>Data not found</div>}
            {characters.length > 0 && (
                <>
                    <Typography variant="h4">Character List</Typography>
                    {characters.map(
                        ({ name, mass, films, gender }: Result, index: number) => (
                            <List
                                sx={{ textAlign: 'right' }}
                                key={index}
                                component="nav"
                                aria-label="secondary mailbox folder"
                            >
                                <ListItemButton>
                                    <Link to={`/event/${index}`} state={
                                        {
                                          name:name,
                                          gender:gender,
                                          mass:mass,
                                          films:films,
                                        }
                                    }>
                                        {name} {gender} {mass}{' '}
                                        {Array.isArray(films) && films.map((item:string) => item.title)}
                                    </Link>
                                </ListItemButton>
                            </List>
                        )
                    )}
                </>
            )}
        </>
    );
};


export default CharacterList;