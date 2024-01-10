import {Route, Routes} from 'react-router-dom';
import MainPage from '../pages/CharactersList/CharactersList';
import InfoPage from "../pages/InfoPage/InfoPage.tsx";


const PagesRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="event/:index" element={<InfoPage/>}/>
        </Routes>
    );
};

export default PagesRouter;