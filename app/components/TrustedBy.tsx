"use client"
import Image from 'next/image'
import React from 'react'

interface TrustedCompany {
    id: number
    src: string
    alt: string
    width: number
    height: number
}

const TrustedBy: React.FC = () => {
    const trustedCompanies: TrustedCompany[] = [
        {
            id: 1,
            src: '/assets/trusted-1.svg',
            alt: 'trusted company 1',
            width: 156,
            height: 24
        },
        {
            id: 2,
            src: '/assets/trusted-2.svg',
            alt: 'trusted company 2',
            width: 172,
            height: 24
        },
        {
            id: 3,
            src: '/assets/trusted-3.svg',
            alt: 'trusted company 3',
            width: 133,
            height: 24
        },
        {
            id: 4,
            src: '/assets/trusted-4.svg',
            alt: 'trusted company 4',
            width: 133,
            height: 24
        },
        {
            id: 5,
            src: '/assets/trusted-5.svg',
            alt: 'trusted company 5',
            width: 130,
            height: 24
        }
    ]

    const duplicatedCompanies = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies, ...trustedCompanies]

    return (
        <div className='bg-[#F6F7F9] py-6 sm:py-9 w-full '>
            <h2 className='text-[#000000] text-[16px] leading-[24px] font-semibold text-center mb-5 px-4 md:px-6 lg:px-8'>
                Trusted By
            </h2>

            <div className='max-w-[1160px] mx-auto overflow-hidden'>
                <div className='flex items-center gap-6 sm:gap-[109px] animate-scroll'>
                    {duplicatedCompanies.map((company, index) => (
                        <div
                            key={`${company.id}-${index}`}
                            className='flex-shrink-0'
                        >
                            <Image
                                src={company.src}
                                alt={company.alt}
                                width={company.width}
                                height={company.height}
                                className='opacity-80 hover:opacity-100 transition-opacity duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustedBy