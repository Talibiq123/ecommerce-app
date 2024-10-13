import React, { useContext, useEffect, useState } from 'react'
import Hero from './Hero'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestCollection, setLatestCollection] = useState([]);

    useEffect(() => {
        setLatestCollection(products.slice(1, 10));
    }, [])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsuom dolor sit amet consectetur adipisicing elit. Voluptatem voluptasa. Quisquam, reiciendis?
            </p>
        </div>

        {/* Rendering Products */}
        <div></div>
    </div>
  )
}

export default LatestCollection
