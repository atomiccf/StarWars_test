import {BrowserRouter} from 'react-router-dom';
import PagesRouter from "./routes/PageRouter.tsx";
import Header from "./components/Header/Header.tsx";
import './App.css'

function App() {


  return (
   <>
   <Header/>
   <BrowserRouter>
     <PagesRouter/>
   </BrowserRouter>
    </>
  )
}

export default App
