import {useSelector} from "react-redux";
import {useState, useEffect,useCallback} from "react";
import List from '../List/List';
import FilterControls from "../FilterControls/FilterControls";

import React from "react";


const Filter: React.FC = () => {
    const charactersSelector = useSelector((state) => state.characters.result);
    const [list, setList] = useState(charactersSelector);
    const [filterStr, setFilterStr] = useState<string>('');
    const [min, setMin] = useState<string>('');
    const [max, setMax] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [film, setFilm] = useState<string>('');


    const cbGetFilterStr = useCallback((str: string): void => {
        setFilterStr(str);
    }, []);

    const cbGetFilterMin = useCallback((min: string): void => {
        setMin(min);
    }, []);

    const cbGetFilterMax = useCallback((max: string): void => {
        setMax(max);
    }, []);

    const cbGetFilterRadio = useCallback((gender: string): void => {
        setGender(gender);
    }, []);

    const cbGetFilterFilm = useCallback((film: string): void => {
        setFilm(film);
    }, []);

    useEffect(() => {
     const filteredList = charactersSelector.filter((character) => {
            const nameMatch = !filterStr || character.name.includes(filterStr);
            const massMatch = (!min || !max) || (character.mass >= +min && character.mass <= +max);
            const genderMatch = !gender || character.gender === gender;
            const filmMatch = !film || character.films.some((filmItem) => filmItem.title === film);

            return nameMatch && massMatch && genderMatch && filmMatch;
        }).sort((a, b) => b.mass - a.mass);

        setList(filteredList);
    }, [charactersSelector, filterStr, min, max, gender]);

    return (
        <>
            {/* Импорт FilterControls */}
            <FilterControls
                cbGetFilterStr={cbGetFilterStr}
                cbGetFilterMin={cbGetFilterMin}
                cbGetFilterMax={cbGetFilterMax}
                cbGetFilterRadio={cbGetFilterRadio}
                cbGetFilterFilm={cbGetFilterFilm}
            />
            {/* Импорт List */}
            <List list={list} />
        </>
    );
};

export default Filter;