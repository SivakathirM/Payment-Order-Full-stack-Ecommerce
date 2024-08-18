import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import addToCard from '../helpers/addToCard'
import Context from '../context';
import scrollTop from '../helpers/scrollTop'

const CategoryWiseProductDisplay = ({category,heading}) => {
    const [data,setData] =useState([])
    const [loading,setLoading]=useState(true)
    const loadingList = new Array(13).fill(null)

    const {fetchUserAddToCard } = useContext(Context);

    const handleAddToCard=async(e,id)=>{
        await addToCard(e,id)
        fetchUserAddToCard()
    }

    const [scroll,setScroll]=useState(0)

    const fetchData= async()=>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        setData(categoryProduct?.data)
    }


    useEffect(()=>{
        fetchData()
    },[])

    

  return (
    <div className='container mx-auto px-4 my-6 relative'>

        <h2 className='font-semibold text-2xl py-4'>{heading}</h2>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all'>
          
            {
                loading ? (
                    loadingList.map((product,index)=>{
                        return(
                            <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow' key={product+index+"product"}>
                                <div className='bg-slate-300 h-48 min-w-[280px] md:min-w-[145px] p-4 flex items-center justify-center animate-pulse'>
                                     
                                </div>
                                <div className='p-4 grid gap-3'>
                                    <h2 className='font-medium text:base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                                    <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                    <div className='flex gap-3'>
                                        <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                        <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                    </div>
                                    <button className='text-sm text-white px-3 rounded-full nimate-pulse bg-slate-200 py-2'></button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((product,index)=>{
                        return(
                            <Link to={"/product/"+product?._id}  className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow' onClick={scrollTop} key={product+index+"product"}>
                                <div className='bg-slate-300 h-48 min-w-[280px] md:min-w-[145px] p-4 flex items-center justify-center'>
                                    <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
                                </div>
                                <div className='p-4 grid gap-3'>
                                    <h2 className='font-medium text:base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.category}</p>
                                    <div className='flex gap-3'>
                                        <p className='text-red-600 font-medium'>{ displayINRCurrency(product?.sellingPrice) }</p>
                                        <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                    </div>
                                    <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e)=>handleAddToCard(e,product?._id)}>Add to Cart</button>
                                </div>
                            </Link>
                        )
                    })
                )
                
            }
        </div>

        
    </div>
  )
}

export default CategoryWiseProductDisplay

