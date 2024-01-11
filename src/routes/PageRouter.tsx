import {Route, Routes} from 'react-router-dom';
import CharactersList from '../pages/CharactersList/CharactersList';
import InfoPage from "../pages/InfoPage/InfoPage.tsx";


const PagesRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<CharactersList/>}/>
            <Route path="detail/:index" element={<InfoPage/>}/>
        </Routes>
    );
};

export default PagesRouter;