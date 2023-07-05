"use client"

import { useDispatch } from "react-redux"
import { removeFromCart } from "@/app/redux-toolkit/features/cart/cartSlice"
import {MdDeleteOutline} from 'react-icons/md';
import Quantity from "./Quantity";
import { useState } from "react";
import Image from "next/image";

function CartItem({ id, image, price }:any) {
    const dispatch = useDispatch();
    const handleDelete = (id: any) => {
        dispatch(removeFromCart(id))
    }
    const [amount, setAmount ] = useState(1)
    const handleDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const handleIncrement = () => {
        setAmount(amount + 1)
    }

    return (
        <div className="w-full">
            <div className="flex justify-between items-center border-solid border-x-2 border-b-2 border-gray-900 p-2 h-14">
                <div ><Image className="object-contain h-12 w-8" src={image} alt="" width={32} height={48}/></div>
                <div className=" w-32 pl-4" ><Quantity amount={amount} handleDecrement={handleDecrement} handleIncrement={handleIncrement} /></div>
                <p className=" w-32 pl-2">{(amount*price).toFixed(2)}</p>
                <button title="button" onClick={() => { handleDelete(id) }}><MdDeleteOutline color="error" /></button>
            </div>
        </div>
    )
}

export default CartItem
