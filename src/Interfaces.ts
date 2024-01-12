export interface Result{
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}


export  interface RootState {
   result:Result[];
}

export type Details = {
    id: string | undefined,
    name: string | undefined,
    gender: string | undefined,
    mass: number | undefined,
    films: Film,
    starships: [],
    species: [],

}

export interface Film {
    title: string;
    episode:number;
    opening_crawl:string;
    director:string;
    producer:string;
}




