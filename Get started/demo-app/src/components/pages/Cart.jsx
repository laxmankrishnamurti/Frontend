import productImage from '../../images/productImage.png';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../CartContext';

function Home() {

    const { cart } = useContext(CartContext)

    return (
        <>
            <div className="lg:w-1/2 mx-auto mt-16">
                <b>Cart Items</b>
                <ul>
                    <li>
                        <div className='flex justify-between items-center'>
                            <div className='mt-4 flex items-center'>
                                <img src={productImage} className='h-16 mr-3' />
                                <span>Peproni Pizza</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='px-4 py-2 bg-orange-400 rounded-full cursor-pointer'>-</span>
                                <span className='px-4'>2</span>
                                <span className='px-4 py-2 bg-orange-400 rounded-full cursor-pointer'>+</span>
                            </div>
                            <div className='flex'>
                                <span>₹</span>
                                <span>5500</span>
                            </div>
                            <div>
                                <button className='px-4 py-1 bg-red-400 rounded-full'>Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <hr className='mt-4' />
                <div className='my-4'>
                    <div className='text-right'>
                        <b>Grand Total : </b>
                        <span>5500</span>
                    </div>
                    <div className='text-right mt-2'>
                        <button className='bg-orange-500 px-4 py-1 rounded-full'>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home