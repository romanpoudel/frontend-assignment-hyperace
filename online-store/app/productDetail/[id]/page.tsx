"use client"

import Star from '@/app/components/Star'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

const SingleProduct = ({params}:any) => {
    const {id}=params
    console.log("🚀 ~ file: page.tsx:9 ~ SingleProduct ~ id:", id)
    const fetchSingleProduct = async (id:any) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }
    const { data, isLoading } = useQuery(["singleProduct",id],()=> fetchSingleProduct(id));
    console.log("🚀 ~ file: page.tsx:13 ~ SingleProduct ~ data:", data)
    
    if(isLoading){
        return <p>Loading...</p>
    }
    const {image,title,rating,price,description,category}=data;
    return (
        <div className='flex  h-screen max-w-4xl  items-center mx-auto'>
            <div className='relative w-1/2 flex justify-center h-96 mr-6'>
                <Image src={image} alt="item" fill style={{ objectFit: 'contain' }}/>
            </div>
            <div className='w-1/2  pr-12'>
                <div >
                    <p className='font-bold text-4xl text-gray-900'>{title}</p>
                    <Star rating={rating} />
                    <p className='font-bold text-red-500 my-6'>Rs. {price}</p>
                    <p className='mb-6 text-justify'>{description ? description.charAt(0).toUpperCase() + description.slice(1) : ''}</p>
                    <p className='font-serif text-lg font-normal text-gray-900'>Category: {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</p>

                </div>
                {/* <div className='mt-6 '>
                    <button  className='border bg-red-500 p-2 rounded-full'><p className='uppercase font-bold text-white'>Add to cart</p></button>
                </div> */}
            </div>
        </div>
    )
}

export default SingleProduct
