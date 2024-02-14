import React, { createContext, useState } from 'react'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'
import { Route, Routes } from 'react-router-dom';
import Id from './id';

export const context=createContext();
function Blogging() {
    
    const [total,setTotal]=useState([]);
    // const value={
    //     total,
    //     setTotal,
    // }
  return (
    <div>
            <context.Provider value={[total,setTotal]}>
        <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Id />} />
      </Routes>
            </context.Provider>
    </div>
  )
}

export default Blogging