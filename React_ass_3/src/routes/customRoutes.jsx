
import { Route,Routes } from "react-router-dom";
import Imagelist from "../components/Imageslist/Imageslist.jsx";
import ImageDetails from "../components/ImageDetails/ImageDetail.jsx";


function CustomRoutes() {
   return(
       <Routes>
            <Route path="/" element={<Imagelist/>}/ >
             <Route  path="/image/:id" element={<ImageDetails/>}/>   
       </Routes>
   )
}

export default CustomRoutes;