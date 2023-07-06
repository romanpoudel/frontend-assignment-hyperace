import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface DataProps{
    id:number
    title:string 
    image:string 
    category:string
}

const SearchList = (props: DataProps) => {
    const { id, title, image, category } = props
    return (
        <Link href={`/productDetail/${id}`}>
            <div className='bg-gray-100 flex p-1 h-18 border'>
                <div className='w-1/4 flex items-center'><Image src={image} alt="product-image" width={30} height={20} /></div>
                <div className='w-3/4 flex flex-col'>
                    <div className='overflow-hidden font-semibold text-sm w-full truncate'>{title}</div>
                    <div className='text-sm text-blue-700'>{category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}</div>
                </div>
            </div>
        </Link>
    )
}

export default SearchList
