import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./redux/store.ts";
import LoadData from "./components/LoadData/LoadData.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store = {store}>
          <LoadData>
              <App />
          </LoadData>
      </Provider>
  </React.StrictMode>,
)
