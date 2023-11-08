import React from 'react';
import {MdDelete} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {remove} from "../redux/slices/CartSlice"
import toast from 'react-hot-toast';

const CartItem = ({item,itemindex}) => {

    const dispatch = useDispatch()
    const removeFromCart =() =>{
        dispatch(remove(item.id));
        toast.error("Removed from the cart")        
    }
    return (
    <div className='flex justify-between items-center mt-6 px-4 py-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
        <div className='w-[120px] h-[150px]'>
            <img src={item.image} alt="img" className='w-full h-full' />
        </div>
        <div className='flex flex-col'>
            <p className='text-gray-700 font-semibold text-left w-60 px-3'>{item.title}</p>
            <p className='w-60 text-gray-400 font-normal text-[12px] text-left px-3'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            <div className='flex justify-between items-center px-3'>
                
                <p className='text-violet-800 font-semibold mr-16'>${item.price}</p>
                <div onClick={removeFromCart}>
                    <MdDelete className='rounded-full bg-red-400 text-stone-700 text-[24px] cursor-pointer hover:scale-110 transition delay-300 ease-linear'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem