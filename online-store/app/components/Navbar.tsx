import Link from 'next/link'
import React from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { useSelector } from 'react-redux';
import type { RootState } from "../redux-toolkit/store";

const Navbar = () => {
    const itemNumber = useSelector((state: RootState) => state.cart.itemsNumber)
    return (
        <div className='flex items-center justify-between h-16 bg-slate-100 px-4 max-w-4xl mx-auto'>
            <div className='font-bold'><Link href="/">OnlineStore</Link></div>
            <div className='relative m-2'>
                <div>
                <Link href="/cart"><LuShoppingCart color='blue' size="25px" /></Link>
                </div>
                <p className='text-white bg-blue-500 rounded-full text-center text-sm h-6 w-6 flex items-center justify-center font-mono absolute -top-4 left-4'>{itemNumber}</p>
            </div>
        </div>
    )
}

export default Navbar
