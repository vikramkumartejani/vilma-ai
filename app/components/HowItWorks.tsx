import Image from 'next/image'
import React from 'react'

interface UseCase {
    id: number
    steps: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
}
const HowItWorks = () => {
    const useCases: UseCase[] = [
        {
            id: 1,
            steps: 'STEP 01',
            title: 'Sign Up & Access',
            description: 'Get your personalized dashboard instantly.',
            imageSrc: '/assets/steps1.svg',
            imageAlt: 'Sign Up & Access'
        },
        {
            id: 2,
            steps: 'STEP 02',
            title: 'Complete Smart Onboarding',
            description: 'Define your business goals step by step.',
            imageSrc: '/assets/steps2.svg',
            imageAlt: 'Complete Smart Onboarding'
        },
        {
            id: 3,
            steps: 'STEP 03',
            title: 'Automate & Measure',
            description: 'Launch campaigns, generate documents, and track results in one place.',
            imageSrc: '/assets/steps3.svg',
            imageAlt: 'Automate & Measure'
        }
    ]
    return (
        <div className='w-full mt-[60px] py-[60px] px-4 md:px-6 lg:px-8'>
            <div className='max-w-[1264px] mx-auto w-full'>
                {/* Header Section */}
                <div className="text-center mb-[60px]">
                    <span className="text-[14px] leading-[20px] font-medium text-[#252525]">
                        How it Works
                    </span>
                    <h2 className="my-4 text-4xl md:text-[44px] leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
                        How VILMA.AI Works
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
                        From signup to measurable results in 3 simple steps
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px]'>
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className='bg-[#FFFBED] ring-[0.2px] ring-[#06244333] rounded-[30px] p-5 hover:shadow-sm transition-shadow duration-300'
                        >
                            <div className='w-[350px] bg-white rounded-[18px] h-[258px] bg-cover flex items-center justify-center' style={{backgroundImage:"url('/assets/how-it-works-card-bg.png')"}}>
                                <Image
                                    src={useCase.imageSrc}
                                    alt={useCase.imageAlt}
                                    width={250}
                                    height={200}
                                    className='object-cover mt-1'
                                />
                            </div>
                            <h3 className='mt-6 text-[#000000] text-[16px] leading-[24px] font-light'>{useCase.steps}</h3>
                            <div className='mt-6 space-y-3'>
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

export default HowItWorks