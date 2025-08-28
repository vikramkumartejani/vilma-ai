import Image from 'next/image'
import React from 'react'

interface Feature {
    id: number
    title: string
    iconSrc: string
    iconAlt: string
}

const Features: React.FC = () => {
    const features: Feature[] = [
        {
            id: 1,
            title: "1,000+ prompts & strategic templates",
            iconSrc: "/assets/brain.svg",
            iconAlt: "brain"
        },
        {
            id: 2,
            title: "Advanced dashboard with ROI metrics",
            iconSrc: "/assets/apps.svg",
            iconAlt: "apps"
        },
        {
            id: 3,
            title: "Scalable plans for every stage",
            iconSrc: "/assets/package.svg",
            iconAlt: "package"
        },
        {
            id: 4,
            title: "Global support, built for non-technical users",
            iconSrc: "/assets/globe.svg",
            iconAlt: "globe"
        }
    ]

    return (
        <div id='features' className='scroll-mt-12 w-full md:mt-[60px] py-[30px] sm:py-[60px] px-4 md:px-6 lg:px-8'>
            <div className='max-w-[1264px] mx-auto w-full'>
                {/* Header Section */}
                <div className="text-center mb-[60px]">
                    <span className="text-[14px] leading-[20px] font-medium text-[#252525]">
                        Features
                    </span>
                    <h2 className="my-3 text-[36px] leading-[44px] md:text-[44px] md:leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
                        Key Features That Empower You
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
                        Everything you need to scale smarter, not harder
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[19px]'>
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className='ring-[0.3px] ring-[#00000033] bg-[#FAFAFA] rounded-[17px] p-6 hover:shadow-sm transition-all duration-300'
                        >
                            <div className='min-w-[47px] max-w-[47px] h-[47px] rounded-[15px] bg-black flex items-center justify-center'>
                                <Image
                                    src={feature.iconSrc}
                                    alt={feature.iconAlt}
                                    width={24}
                                    height={24}
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

export default Features