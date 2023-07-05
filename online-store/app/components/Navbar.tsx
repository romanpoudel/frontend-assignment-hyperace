import Link from 'next/link'
import React from 'react'
import {FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import type { RootState } from "../redux-toolkit/store";

const Navbar = () => {
    const itemNumber = useSelector((state: RootState) => state.cart.itemsNumber)
    return (
        <div className='flex items-center justify-between h-16 bg-blue-600 px-4 max-w-4xl mx-auto shadow-md top-0 sticky z-50'>
            <div className='font-bold text-2xl text-gray-50 font-serif tracking-wider'><Link href="/">OnlineStore</Link></div>
            <div className='relative m-2'>
                <div>
                <Link href="/cart"><FaShoppingCart color='white' size="25px" /></Link>
                </div>
                <p className='text-blue-600 bg-gray-50 rounded-full text-center text-sm font-semibold h-6 w-6 flex items-center justify-center font-mono absolute -top-4 left-4'>{itemNumber}</p>
            </div>
        </div>
    )
}

export default Navbar
