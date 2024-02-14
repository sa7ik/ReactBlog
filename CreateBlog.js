import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {context} from "./Blogging";

function CreateBlog() {
    const [total,setTotal]=useContext(context);
    const [text,setText]=useState("");
    const [textArea,setTextArea]=useState("");
    
    const arr=[];
    const Submit=()=>{
        
        
        total.push({text,textArea})
        console.log(total);
        
    }
    const headingvalue=(event) =>{
setText(event.target.value);

    }
    const textarea=(event)=>{
        setTextArea(event.target.value)
    }
    return (
        <div className='blog' 
        style={{ background:"indigo",
            display: "flex",
        flexDirection:"column",
        height:'100vh',
        width:'100vw',
        justifyContent:'center',
        alignItems:'center',
        }}>
            {/* <h1 style={{color:"white"}}>{text}</h1> */}
           <div>
                <input type='text'
                    onChange={headingvalue}
                style={{
                      
                    width:"200px"}}/><br/>
            <br/>
            <textarea onChange={textarea}
             rows={"5"}style={{
                        
                width:"200px"}}></textarea>
            </div>
            <Link to="/Blogs"><button type='button' onClick={Submit}>Submit</button></Link> 
            {/* <h1>{total[0]}</h1>
                {total.map(data=>{
                    
                })} */}
           
        </div>
    )
}

export default CreateBlog