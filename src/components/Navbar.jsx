import React from 'react';
import {FaOpencart} from 'react-icons/fa';
import Logo from "../images/logo.png";
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {cart} = useSelector((state)=>state)
    return (
    <div>
        <div className='flex flex-row justify-between items-center h-15 p-3 max-w-5xl mx-auto'>
            <NavLink to="/">
                <div className='h-12'>
                    <img src={Logo} alt="logo" className='h-full w-full ' />
                </div>
            </NavLink>
            <div className='flex items-center text-slate-100 font-medium mr-5 space-x-6'>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className='relative'>
                        <FaOpencart className='text-3xl'/>
                        {
                            cart.length>0 && 
                            <span className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-slate-100 text-violet-900 flex justify-center items-center animate-bounce rounded-full'>
                                {cart.length}</span>
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar