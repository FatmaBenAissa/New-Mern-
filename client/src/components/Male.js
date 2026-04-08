import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

function Male({ping, setping}) {
        const products=useSelector((state)=>state.product.productlist);
  return (
    <div className='parent'>
{products?.filter((el)=>el.category==="homme").map((el)=><ProductCard el={el} ping={ping} setping={setping}/>)}

    </div>
  )
}

export default Male