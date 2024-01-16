import { Link } from "react-router-dom";
import Imagelist from "../Imageslist/Imageslist.jsx";


  function Images({image,id}) {
  return(
    <Link to={`/image/${id}`} className="imgdiv">
      <img src={image} alt="image"></img>
    </Link>
  )
}
export default Images;