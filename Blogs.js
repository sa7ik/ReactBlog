import React, { useContext} from 'react'
import {context} from "./Blogging";
import "./bloge.css";
import { Link ,useNavigate} from 'react-router-dom';
function Blogs() {
    const navigate = useNavigate()

    const [total]=useContext(context);
    console.log(total)
    return (
        <div>
        
        {
            total.map((data,ind)=>{
                
            console.log(data,ind);
            return(<div id='list' key={ind}>   
            <h1>{data.text}</h1>
           
           
           
            <button onClick={()=>navigate(`${ind}`)}>Read More</button> 
            </div>)
            
        })
        }</div>
  )
}

export default Blogs