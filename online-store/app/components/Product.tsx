import Image from "next/image"
import Link from "next/link"

function Product({id,image,title,description}:any) {
    return (
        <Link href={`/productDetail/${id}`}>
        <div className='m-2 p-8 bg-white w-52 h-80 flex flex-col items-center justify-center rounded-md mx-auto hover:shadow-lg '>
            <div className=''>
                <Image src={image} alt="product-image" className='w-44 h-56 rounded-lg object-contain' width={176} height={224} priority/>
            </div>
            <div className='w-52 px-6 '>
                <div><p className='text-lg font-bold text-gray-900 truncate'>{title}</p></div>
                <div><p className='text-sm text-gray-600 truncate'>{description}</p></div>
            </div>
        </div>
        </Link>
    )
}

export default Product