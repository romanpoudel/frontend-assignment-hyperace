interface QuantityProps {
    amount: number;
    handleDecrement: () => void;
    handleIncrement: () => void;
}

function Quantity({ amount, handleDecrement, handleIncrement }: QuantityProps) {
    console.log(amount)
    return (
        <div className="flex font-bold w-22  p-2">
            <div className="bg-gray-200 w-6 text-center rounded-xl"><button onClick={handleDecrement}>-</button></div>
            <div className="w-10 text-center">{amount}</div>
            <div className="bg-gray-200 w-6 text-center rounded-xl"><button onClick={handleIncrement}>+</button></div>
        </div>
    )
}

export default Quantity
