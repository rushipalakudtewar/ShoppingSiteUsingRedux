import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/slices/CartSlice"
import toast from 'react-hot-toast'

const Product = ({detail}) => {
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch()

    const addToCart=()=>{
        dispatch(add(detail));
        toast.success("added to cart")    
    }
    const removeCart=()=>{
        dispatch(remove(detail.id));
        toast.error("Item removed succssfully")
    }
    

    return (
    <div className='flex flex-col items-center justify-between hover:scale-110 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition duration-300 ease-in gap-3 mt-10 p-4 ml-5 rounded-xl '>
        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{detail.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{detail.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={detail.image} alt="img" className='w-full h-full' />
        </div>
        <div className='flex justify-between items-center gap-12 mt-6'>
            <p className='text-violet-800 font-semibold'>${detail.price}</p>
            { 
        
                cart.some((d) => d.id == detail.id) ?
                    (
                        <button className='text-purple-800 border-2 border-purple-800 rounded-full p-1 px-2 uppercase text-[12px] hover:bg-purple-800 hover:text-white transition delay-300 ease-in' onClick={removeCart}>Remove item</button>
                    ): (
                        <button className='text-purple-800 border-2 border-purple-800 rounded-full p-1 px-2 uppercase text-[12px] hover:bg-purple-800 hover:text-white transition delay-300 ease-in' onClick={addToCart}>Add to Cart</button>
                    )
            }
        </div>
    </div>
  )
}

export default Product