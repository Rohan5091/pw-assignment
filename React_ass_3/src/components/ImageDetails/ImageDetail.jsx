import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetail.css"

  function ImageDetails() {
  const {id}=useParams()
  const [imageDetail,setImageDetails]=useState({})
   async function download() {
     const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
     setImageDetails({
        url:response.data.photo.url,
        title:response.data.photo.title,
        description:response.data.photo.description
     })
  }
  useEffect(()=>{
    download()
  },[])
  return(
     <div className="div">
     <div className="ImageDetailWrapper">
        <div className="imagediv">
         <img  src={imageDetail.url} alt="Image"/>
        </div>
          <div className="details">
               <h1 className="title">{imageDetail.title}</h1>
               <p className="description">{imageDetail.description}</p>
          </div>
     </div>
     </div>
  )
 }

 export default ImageDetails;