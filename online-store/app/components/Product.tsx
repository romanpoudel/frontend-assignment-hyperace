import Image from "next/image"

function Product({id,image,title,description}:any) {
    return (
        
        <div className='m-2 p-4 bg-white w-52 h-80 flex flex-col items-center justify-center rounded-md mx-auto'>
            <div className=''>
                {/* <img src={image} alt='images' className='w-42 h-56 rounded-lg object-contain'/> */}
                <Image src={image} alt="product-image" className='w-42 h-56 rounded-lg object-contain' width={224} height={224}/>
            </div>
            <div className='w-52 px-4 '>
                <div><p className='text-xl font-bold text-gray-900 truncate'>{title}</p></div>
                <div><p className='text-sm text-gray-600 truncate'>{description}</p></div>
            </div>
        </div>
    )
}

export default Product