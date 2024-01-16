import axios from "axios";
import { useEffect, useState } from "react";
import "./Imageslist.css"
import Images from "../Image/Image.jsx";



 
  function Imagelist() { 

    const [state,setStates]= useState({
        isloading:true,
        imagesdata:[],
        offset:0,
        Api:`https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`
    })
   async function download() {
    setStates((state)=>({...state,isloading:true}))
     const resorce=await axios.get(state.Api)
     const ImagesObj=resorce.data.photos
     setStates((state)=>({...state,
    }))

     const data=ImagesObj.map((d)=>{ 
        return{
          id: d.id,
          url:d.url,
          description:d.description,
          title: d.title,
        }
     })
     setStates((state)=>({...state,imagesdata:data,isloading:false}))
  }


  useEffect(()=>{
    download()
  },[state.Api])

  return(
    <div className="main">
      <div className="images">
         {(state.isloading)?"Loading....":
         state.imagesdata.map((img)=>  <Images id={img.id} image={img.url} key={img.id}/> )}
      </div>

      <div className="btn">
           <button type="button" disabled={state.offset<=0} onClick={()=>{
            setStates((state)=>({...state,offset:state.offset-20}))   
            setStates((state)=>({...state,Api:`https://api.slingacademy.com/v1/sample-data/photos?offset=${state.offset}&limit=20`}))  
           }
          }>
             Pre
           </button>
           <button type="button" disabled={state.offset>=130}  onClick={()=>{
            setStates((state)=>({...state,offset:state.offset+20}))   
            setStates((state)=>({...state,Api:`https://api.slingacademy.com/v1/sample-data/photos?offset=${state.offset}&limit=20`}))  
           }}>
             Next
           </button>
      </div>

    </div>
    
    
   )
}

export default Imagelist;