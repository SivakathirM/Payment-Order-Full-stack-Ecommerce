import React, { useEffect, useState } from 'react'
import image4 from '../assest/banner/web1.webp'
import image2 from '../assest/banner/web2.webp'
import image3 from '../assest/banner/web3.webp'
import image1 from '../assest/banner/web4.webp'
import image5 from '../assest/banner/web5.webp'

import image1Mobile from '../assest/banner/mobile1.jpeg'
import image2Mobile from '../assest/banner/mobile2.jpeg'
import image3Mobile from '../assest/banner/mobile3.jpg'
import image4Mobile from '../assest/banner/mobile4.jpeg'
import image5Mobile from '../assest/banner/mobile5.jpeg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {

    const [currentImage,setCurrentImage] =useState(0)
    const desktopImages=[
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImages=[
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const nextImage=()=>{
      if (desktopImages.length -1 > currentImage) {
        setCurrentImage(preve=>preve +1)
      }
    }

    const preveImage=()=>{
      if (desktopImages !=0) {
        setCurrentImage(preve=>preve -1)
      }
    }

    useEffect(()=>{
      const interval =setInterval(() => {
        if (desktopImages.length -1 > currentImage) {
          nextImage()
        }else{
          setCurrentImage(0)
        }
      }, 5000);
      
      return ()=> clearInterval(interval)
    },[currentImage])
  return (
    <div className='container mx-auto px-4 rounded '>
      <div className='h-46 md:h-56 w-full bg-slate-200 relative'>
        <div className='absolute z-10 w-full h-full md:flex items-center hidden'>
          <div className='flex justify-between w-full text-2xl'>
              <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
              <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button>
          </div>
        </div>
        {/* desktop and tablet version */}
        <div className='hidden md:flex h-full w-full overflow-hidden'> 
            {
                desktopImages.map((imageURL,index)=>{
                    return(
                        <div className='w-full h-full min-w-full min-h-full transition-all' style={{transform:`translateX(-${currentImage * 100}%)`}} key={imageURL+index+"image"}>
                            <img src={imageURL} className='w-full h-full' />
                        </div>
                    )
                })
            }
        </div>   

        {/* mobile version */}
        <div className='flex h-full w-full overflow-hidden md:hidden'> 
            {
                mobileImages.map((imageURL,index)=>{
                    return(
                        <div className='w-full h-full min-w-full min-h-full transition-all' style={{transform:`translateX(-${currentImage * 100}%)`}} key={imageURL+index+"image"}>
                            <img src={imageURL} className='w-full h-full object-cover' />
                        </div>
                    )
                })
            }
        </div>    
      </div>
    </div>
  )
}

export default BannerProduct
