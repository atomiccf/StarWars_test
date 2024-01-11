import React, {ReactNode, useEffect} from 'react';
import {setResult} from "../../redux/characterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

interface LoadDataProps {
    children: ReactNode;
}

const LoadData: React.FC<LoadDataProps> = ({children}) => {
    const dispatch = useDispatch();

    const fetchFilmsData = async () => {
        try {
            const response = await axios.get('https://swapi.dev/api/people', {});
            const characters = response.data.results;


            const allFilmUrls = characters.reduce((acc, character) => {
                acc.push(...character.films);
                return acc;
            }, []);

            const uniqueFilmUrls = [...new Set(allFilmUrls)]; // Remove duplicates

            const filmsData = await Promise.all(uniqueFilmUrls.map(async (filmUrl) => {
                const filmResponse = await axios.get(filmUrl);
                return filmResponse.data;
            }));

            const charactersWithFilmsData = characters.map(character => ({
                ...character,
                films: character.films.map(filmUrl => {
                    const filmData = filmsData.find(film => film.url === filmUrl);
                    return filmData || null;
                }),
            }));

            dispatch(setResult(charactersWithFilmsData));


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFilmsData();
    }, [dispatch]);

    return <>
        {children}
    </>;
}

export default LoadData;