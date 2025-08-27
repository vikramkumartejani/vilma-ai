import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className='bg-gray-50 flex items-end justify-end'>
            <Image src='/assets/hero-bg.svg' alt='hero' width={900} height={771} />
            </div>
        </div>
    )
}

export default Hero