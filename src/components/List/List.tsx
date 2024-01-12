import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {Result} from "../../Interfaces.ts";
import {Link} from "react-router-dom";
import './List.css';



interface ListPros {
    list?: [] | undefined;
}

const ListFilter: React.FC<ListPros> = ({list}) => {
    const tableStyle = {
        flexGrow: 1,
        width: "100%",
        padding: '30px',
        backgroundColor: 'black',
        border: '2px solid gold',
   };
    const color = {color: 'gold'};
    const row = {'&:last-child td, &:last-child th': {border: 0}};
    const text = {flexGrow: 1, width: "100%", paddingBottom: '10px', color: 'gold'};



    return (
        <>
            {!list || list.length === 0 && <div className='load_text'>Loading...</div>}
            {/*
              //  @ts-expect-error: list.length can be undefined */}
            {list.length > 0 &&
                <>
                    <Typography align="center" sx={text} variant="h4">Character
                        List</Typography>
                    <TableContainer sx={tableStyle} component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={color}>Characters Name</TableCell>
                                    <TableCell sx={color} align="center">Gender</TableCell>
                                    <TableCell sx={color} align="center">Mass</TableCell>
                                    <TableCell sx={color} align="center">Films</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list?.map(({
                                                name,
                                                gender,
                                                mass,
                                                films,
                                                starships,
                                                species
                                            }: Result, index: number) => (

                                    <TableRow
                                        hover={true}
                                        key={index}
                                        component={Link}
                                        to={`/detail/${index}`}
                                        state={{
                                            name: name,
                                            gender: gender,
                                            mass: mass,
                                            films: films,
                                            starships: starships,
                                            species: species,
                                        }}
                                        sx={row}

                                    >
                                        <>
                                            <TableCell sx={color} align="center" component="th"
                                                       scope="row">{name}</TableCell>
                                            <TableCell sx={color} align="center">{gender}</TableCell>
                                            <TableCell sx={color} align="center">{mass}</TableCell>
                                            <TableCell sx={color} align="right">
                                                {Array.isArray(films) && films.map((item, index: number) =>
                                                    <div key={index} className='film_container'>
                                                        {/*
                                                        //  @ts-expect-error: item.title type error */}
                                                        <span>{item.title}</span></div>
                                                )}
                                            </TableCell>
                                        </>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
        </>
    );
}

export default ListFilter;