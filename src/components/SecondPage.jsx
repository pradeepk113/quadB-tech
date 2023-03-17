import React, {  useContext } from "react";

import { Context } from "./Context";
import style from "./Data.module.css"

const SecondPage = (props) => {
    const {data}=useContext(Context)
    console.log(data)
    
  return(
    <div className={style.second}>  
        {data.map((el)=>(
        <div className="about">
           {el.show.image===null ? <p>Image Not Found</p>:
        <img src={el.show.image.medium} alt='error'/> }
        <h3>{el.show.name}</h3>
        <p className={style.summary}>{el.show.summary}</p>
        </div>
       
                    
                        

             
               
        ))}
    </div>
  )
    
  
};

export default SecondPage;