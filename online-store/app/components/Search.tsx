"use client"
/* This is a TypeScript React component called "Search". It is a search input
component that fetches products from an API and displays a list of search results based on the
user's input. */

import React, { useState, useRef, useEffect } from 'react'
import SearchList from '@/app/components/SearchList'
import { useQuery } from '@tanstack/react-query'


interface SearchProps {
    show: string;
}

interface Data {

    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }

}

const Search = ({ show }: SearchProps) => {
    const [search, setSearch] = useState("")
    console.log("🚀 ~ file: Search.tsx:5 ~ Search ~ search:", search)
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    }
    const { data, status, isLoading } = useQuery(["products"], fetchProducts);
    console.log("🚀 ~ file: HomePage.tsx:6 ~ fetchData ~ res:", data)

    const myRef = useRef<HTMLInputElement>(null)
    const [showList, setShowList] = useState(false)
    const handleInputFocus = () => {
        setShowList(true)
    }
    useEffect(() => {
        const handleoutsideClick = (event: MouseEvent) => {
            if (myRef.current && !myRef.current.contains(event.target as Node) && !(event.target as HTMLElement).tagName.toLowerCase().match(/input|textarea/)) {
                setShowList(false);
            }
        }

        document.addEventListener("click", handleoutsideClick)
        return () => {
            document.removeEventListener("click", handleoutsideClick)
        }
    }, [])
    return (
        <div className={`${show} sm:block relative`}>
            <div className="">
                <input
                    type="text"
                    placeholder='Search...'
                    className='p-1 pl-2 rounded focus:outline-0 bg-blue-500 sm:bg-white text-white sm:text-black placeholder:text-white sm:placeholder:text-black'
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={handleInputFocus}
                />
            </div>
            <div className='absolute w-full' ref={myRef}>
                {showList && !isLoading && search !== "" && data.slice(1, 6).filter((item: Data) => {
                    if (item.title.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                }).map((item: Data) => (
                    <SearchList key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Search
