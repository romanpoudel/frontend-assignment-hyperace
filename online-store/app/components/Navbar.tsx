"use client"

/**
 * The above code is a TypeScript React component that represents a navbar with a logo, search bar, and
 * shopping cart icon.
 * @returns The Navbar component is being returned.
 */
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import type { RootState } from "../redux-toolkit/store";
import Search from './Search';
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    const itemNumber = useSelector((state: RootState) => state.cart.itemsNumber)
    const [show, setShow] = useState("hidden")
    const [icon, setIcon] = useState(true)
    const [isMobileView, setIsMobileView] = useState(false);
    const handleShow = () => {
        setShow("block")
        setIcon(false)
    }
    const handleShowMob=()=>{
        setShow("hidden")
        setIcon(true)
    }

    // Check the viewport width to determine the view mode

    useEffect(() => {
        const checkViewMode = () => {
            setIsMobileView(window.innerWidth < 640);
            if (isMobileView) {
                setShow("hidden")
                setIcon(true)
            }
        };
        window.addEventListener('resize', checkViewMode);
        return () => {
            window.removeEventListener('resize', checkViewMode);
        };
    }, [isMobileView]);

    return (
        <div className='flex items-center justify-between h-16 bg-blue-600 px-4 max-w-4xl mx-auto shadow-md top-0 sticky z-50'>
            <div className='font-bold text-2xl text-gray-50 font-serif tracking-wider'><Link href="/">OnlineStore</Link></div>
            <div className='sm:hidden mx-2' onClick={handleShow}>{icon && <FaSearch color='white' size="20px" />}</div>
            <div className='absolute left-1/2 -translate-x-1/2 sm:left-1/2 flex justify-center mt-28 sm:mt-0'><Search show={show} mobileView={isMobileView} handleShowMob={handleShowMob}/></div>

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
