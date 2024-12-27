import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "../Containers/Home";
import Movies from "../Containers/Movies";
import Series from '../Containers/Series';

export default function Router(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/series" element={<Series/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}