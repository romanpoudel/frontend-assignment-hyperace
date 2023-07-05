import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';


function Star({ rating }: any) {
    if (typeof rating === 'undefined') {
        return <p>Loading...</p>; // or any other loading indicator/message
    }
    const { rate, count } = rating;
    console.log(rate)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    rate >= index + 1 ? (
                        <BsStarFill />
                    ) : rate >= number ? (
                        <BsStarHalf />
                    ) : (
                        <BsStar />
                    )
                }
            </span>
        )
    }
    )
    return (
        <div className="mt-4 flex items-center">
            {ratingStar}
            <p className="ml-4">({count} customer reviews)</p>
        </div>
    )
}

export default Star
