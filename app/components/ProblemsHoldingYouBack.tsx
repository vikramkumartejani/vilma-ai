import Image from 'next/image'
import React from 'react'

interface Feature {
    id: number
    title: string
    iconSrc: string
    iconAlt: string
}

const ProblemsHoldingYouBack = () => {
    const features: Feature[] = [
        {
            id: 1,
            title: "Do you spend 10–20 hours a week managing marketing?",
            iconSrc: "/assets/clock-eight.svg",
            iconAlt: "clock-eight"
        },
        {
            id: 2,
            title: "Do you waste up to 30% of your budget on poorly integrated tools?",
            iconSrc: "/assets/dollar.svg",
            iconAlt: "dollar"
        },
        {
            id: 3,
            title: "Are you frustrated by unmeasurable results and lack of professionalism?",
            iconSrc: "/assets/sad.svg",
            iconAlt: "sad"
        }
    ]
    return (
        <div className='w-full mt-5 sm:mt-10 md:mt-20 lg:mt-[120px] py-[30px] md:py-10 lg:py-[60px] px-4 md:px-6 lg:px-8'>
            <div className='max-w-[1264px] mx-auto w-full'>
                <div className="text-center mb-[60px]">
                    <h2 className="mb-3 text-[36px] md:text-[44px] leading-[44px] sm:leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
                        Are These Problems Holding You Back?
                    </h2>
                    <p className="text-[16px] leading-[24px] font-semibold sm:font-normal text-[#64717E]">
                        Most businesses struggle with inefficient marketing processes. You're not alone.
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className='ring-[0.3px] ring-[#00000033] bg-[#FAFAFA] rounded-[17px] p-6 hover:shadow-sm transition-all duration-300'
                        >
                            <div className='min-w-[47px] max-w-[47px] h-[47px] rounded-[15px] bg-black flex items-center justify-center'>
                                <Image
                                    src={feature.iconSrc}
                                    alt={feature.iconAlt}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h3 className='mt-6 text-[#333333] text-[20px] leading-[24px] font-semibold'>
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProblemsHoldingYouBack