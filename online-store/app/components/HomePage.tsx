"use client"

/**
 * This is a TypeScript React component that fetches and displays a list of products from an API.
 * @returns The HomePage component is being returned.
 */
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Product from '@/app/components/Product'

const HomePage = () => {
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    }
    const { data, status } = useQuery(["products"], fetchProducts);
    console.log("🚀 ~ file: HomePage.tsx:6 ~ fetchData ~ res:", data)
    return (
        <div className="App bg-white mx-auto">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 p-4 gap-x'>
                    {data.map((item:any) => (
                        <Product key={item.id} {...item}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomePage
