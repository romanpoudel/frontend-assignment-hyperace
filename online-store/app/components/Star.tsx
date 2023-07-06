/**
 * The Star component is a React component that displays a star rating based on the given rating prop.
 * @param {any}  - The `Star` component takes a `rating` prop, which is an object with two properties:
 * `rate` and `count`.
 * @returns The Star component is returning a div element containing an array of span elements
 * representing star ratings, along with a paragraph element displaying the count of customer reviews.
 */
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface RateProps {
    rating: {
        rate: number
        count: number
    }
}

function Star({ rating }: RateProps) {
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
