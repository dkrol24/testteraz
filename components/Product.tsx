
import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
import { useDispatch } from "react-redux";
import { addToBasket } from '../redux/basketSlice';
import { toast } from 'react-hot-toast';

interface Props {
  product:Product;
}
function Product  ({product}: Props)  {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`,{
    position:"bottom-center"});
  }
  return (
    <div style={{width:'301px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',background:'green'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Image alt={`${product.title}`} width={300} height={300} src={urlFor(product.image[0]).url()}/>
      </div>
      <div style={{display:'flex',justifyContent:'space-around',width:'100%'}} >
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%',padding:'0.5rem'}}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      <div style={{display:'flex',justifyContent:'center',width:'50%',cursor:'pointer'}} onClick={addItemToBasket}>
      <p>shopcart</p>
      </div>
      </div>
    </div>
  )
}

export default Product