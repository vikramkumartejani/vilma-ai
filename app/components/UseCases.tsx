import Image from 'next/image'
import React from 'react'

interface UseCase {
    id: number
    title: string
    description: string
    imageSrc: string
    imageAlt: string
}

const UseCases: React.FC = () => {
    const useCases: UseCase[] = [
        {
            id: 1,
            title: 'Solopreneurs',
            description: 'Professionalize your marketing without a team',
            imageSrc: '/assets/solopreneurs.png',
            imageAlt: 'Solopreneurs'
        },
        {
            id: 2,
            title: 'Boutique Agencies',
            description: 'Scale operations and deliver more client value',
            imageSrc: '/assets/boutique-agencies.png',
            imageAlt: 'Boutique Agencies'
        },
        {
            id: 3,
            title: 'Small Businesses',
            description: 'Achieve fast, measurable results',
            imageSrc: '/assets/small-businesses.png',
            imageAlt: 'Small Businesses'
        }
    ]

    return (
        <div id='usecases' className='bg-[#FAFAFA] w-full sm:mt-[60px] py-[30px] sm:py-[60px] px-4 md:px-6 lg:px-8 scroll-mt-12'>
            <div className='max-w-[1264px] mx-auto w-full'>
                {/* Header Section */}
                <div className="text-center mb-[55px]">
                    <span className="text-[14px] leading-[20px] font-medium text-[#252525]">
                        Use Cases
                    </span>
                    <h2 className="my-3 text-[36px] md:text-[44px] leading-[44px] md:leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
                        Who Is VILMA.AI For?
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
                        Designed to serve different business profiles
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]'>
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className='bg-white rounded-[33px] p-6 hover:shadow-sm transition-shadow duration-300'
                        >
                            <Image
                                src={useCase.imageSrc}
                                alt={useCase.imageAlt}
                                width={350}
                                height={258}
                                className='rounded-[33px] w-full h-auto object-cover'
                            />
                            <div className='mt-5 space-y-2'>
                                <h3 className='text-[#333333] text-[20px] leading-[24px] font-semibold'>
                                    {useCase.title}
                                </h3>
                                <p className='text-[#64717E] text-[16px] leading-[24px] font-normal'>
                                    {useCase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UseCases