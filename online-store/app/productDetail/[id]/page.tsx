"use client"
/**
 * The SingleProduct component is a React component that displays information about a single product
 * and allows the user to add it to their cart.
 * @param {any}  - The above code is a React component called SingleProduct. It receives a parameter
 * called "params" which is an object containing the id of the product.
 * @returns The SingleProduct component is being returned.
 */

import Star from '@/app/components/Star'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { addToCartReducer } from '@/app/redux-toolkit/features/cart/cartSlice'

interface SingleProductProps {
    params: {
        id: number;
    };
}

const SingleProduct = ({ params }: SingleProductProps) => {
    const { id } = params
    console.log("🚀 ~ file: page.tsx:9 ~ SingleProduct ~ id:", id)
    const dispatch = useDispatch();
    const fetchSingleProduct = async (id: number) => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        return res.json()
    }
    const { data, isLoading } = useQuery<any, Error>(["singleProduct", id], () => fetchSingleProduct(id));
    console.log("🚀 ~ file: page.tsx:13 ~ SingleProduct ~ data:", data)

    if (isLoading) {
        return <p className='text-center font-semibold'>Loading...</p>
    }
    const { id: alias, image, title, rating, price, description, category } = data;

    const handleAddToCart = () => {
        const payload = {
            alias,
            image,
            price
        };

        const action = addToCartReducer(payload); // Create an action object

        dispatch(action); // Dispatch the action
    };
    return (
        <div className='relative -top-16  flex  h-screen   items-center max-w-4xl mx-auto bg-white'>
            <div className='relative w-1/2 flex justify-center h-96 mr-6 border-2 ml-6'>
                <Image src={image} alt="item" fill style={{ objectFit: 'contain' }} className='p-4' />
            </div>
            <div className='w-1/2  pr-12 h-96'>
                <div >
                    <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900'>{title}</p>
                    <Star rating={rating} />
                    <p className='font-bold text-blue-500 my-6'>Rs. {price}</p>
                    <p className='mb-6 text-justify text-xs sm:text-sm md:text-base lg:text-lg h-24 sm:h-full overflow-hidden sm:overflow-visible'>{description ? description.charAt(0).toUpperCase() + description.slice(1) : ''}</p>
                    <p className='font-serif text-base sm:text-lg font-normal text-blue-600'><span className='font-semibold font-sams'>Category:</span> {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</p>

                </div>
                <div className='mt-6 '>
                    <button onClick={handleAddToCart} className='border bg-blue-500 p-2 rounded-full hover:shadow-lg hover:bg-blue-600'><p className='uppercase sm:font-semibold text-sm sm:text-base text-white'>Add to cart</p></button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
