import React,{useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {
    const API_URL="https://fakestoreapi.com/products"
    const [loading,setLoading]=useState(false)
    const [details,setDetails]=useState([])    
    
    async function fetchProductDetails()
    {
        setLoading(true)
        try{
            const res = await fetch(API_URL);
            const data = await res.json()
            setDetails(data)
        }
        catch{
            setDetails([])
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchProductDetails()
    },[])
    
    
    return (
        <div>
            {
                loading ? <Spinner/>:
                details.length>0 ? 
                (
                    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl p-2 mx-auto'>
                        {
                            details.map((detail)=>(
                                <Product key={detail.id} detail={detail}/>
                            ))
                        }
                    </div>
                ):
                <div className='min-h-[90vh] flex flex-col items-center justify-center'>
                    <p className='text-gray-700 font-semibold text-2xl mb-2'>Page is Empty!</p>
                </div>
            }
        </div>
  )
}

export default Home