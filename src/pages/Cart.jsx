import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
    const {cart} = useSelector((state)=>state)
    const [totalprice,setTotalPrice] = useState(0);
    useEffect(()=>{
        setTotalPrice(cart.reduce((acc,curr) => acc+curr.price,0))
    },[cart])
  return (
    <div>
        {
            cart.length>0 ? 
            (
                <div className='flex flex-col md:flex-row justify-center mx-auto mt-3 max-w-5'>
                    <div className='w-[100%] md:w-[35%] flex flex-col p-2'>
                        {
                            cart.map((item,index)=>{
                                return <CartItem key={item.id} item={item} itemindex={index}/>
                            })
                        }

                    </div>
                    <div>

                    <span class="h-full w-3 bg-red-600 "></span>
                    </div>
                    <div className='flex flex-col w-[100%] md:w-[40%] mt-5 '>
                        <div className='flex flex-col p-5 gap-5 my-14 h-[100%] justify-between'>
                            <div className='flex flex-col gap-5'>
                            <div className='text-xl text-violet-800'>Your Cart</div>
                            <div className='text-5xl text-violet-800'>Summary</div>
                            <p className='text-gray-700 text-[20px] font-semibold'>
                                <span>Total Items: {cart.length}</span>
                            </p>
                            </div>
                        </div>
                        
                        <div className='flex flex-col mx-6 '>
                            <p className=' text-violet-800 text-xl font-semibold'>Total Price: <span className='font-bold text-violet-800 text-xl'>${totalprice}</span></p>
                            <NavLink to="https://buy.stripe.com/test_14kg1qh2X24G59e000">
                            <button className='text-slate-50 font-bold border-2 bg-purple-800 rounded-lg py-2 px-20 mt-3 uppercase text-[16px] hover:text-purple-800 hover:bg-white hover:border-violet-800 transition delay-300 ease-in'>Checkout Now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>    
            ):(
                <div className='min-h-[90vh] flex flex-col items-center justify-center'>
                    <h1 className='text-gray-700 font-semibold text-xl mb-2'>Your cart is empty!</h1>
                    <NavLink to="/">
                    <button className='uppercase bg-violet-400 hover:bg-violet-800 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2border-2 border-violet-600 font-semibold hover:text-white p-3 px-10 tracking-wider'>Shop Now</button>
                    </NavLink>
                </div>
            )
        }
    </div>
  )
}

export default Cart