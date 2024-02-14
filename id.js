import React, { useContext} from 'react'
import {context} from "./Blogging";
import { useParams } from 'react-router-dom';

function Id() {
    const [total]=useContext(context);
    const {id} = useParams();
    const val = total[id]
    
  return (
    <div>
         
            
                
            
            <div id='list'>   
            <h1>{val.text}</h1>
           
            <p>{val.textArea}</p>
           
            
            </div>
            
          
    </div>
  )
}

export default Id