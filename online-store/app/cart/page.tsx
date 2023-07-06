"use client"

import { useSelector } from "react-redux"
import CartItem from "../components/CartItem";
import type { RootState } from "../redux-toolkit/store";

interface CartProduct {
    id: number;
    image: string;
    price: number;
}

function Cart() {
    const data = useSelector((state: RootState) => state.cart.cartProducts);
    console.log(data)
    return (
        <div className="flex flex-col items-center mt-10 max-w-4xl mx-auto">
            <h2 className="font-bold mb-3 text-lg">Cart</h2>
            <div className="flex justify-between uppercase w-full bg-white text-blue-500 font-semibold p-2 border-2 border-blue-600">
                <p>Item</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            {data.length === 0 ? <h1 className="font-bold mt-4">Please add to cart</h1> : data.map((elem: CartProduct) => {
                return <CartItem key={elem.id} {...elem} />
            })}
        </div>
    )
}

export default Cart