import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Addproduct from './Addproduct';

function Home({ping, setping}) {
    const products=useSelector((state)=>state.product.productlist);
    const [category, setcategory] = useState("all");
    const [text, settext] = useState("")
   
  return (
    <>
    <Addproduct ping={ping} setping={setping}/>
    <input type="text" onChange={(e)=>settext(e.target.value)}/>
    <button onClick={()=>setcategory("homme")}>Male</button><button onClick={()=>setcategory("femme")} >Female</button>
  
    <div className='parent'>
{category=="all"?products?.map((el)=><ProductCard el={el} ping={ping} setping={setping}/>):

products?.filter((el)=>el.category==category && el.nameproduct.includes(text)).map((el)=><ProductCard el={el} ping={ping} setping={setping}/>)
}

    </div>
      </>
  )
}

export default Home