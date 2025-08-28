import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-full px-4 md:pl-6 lg:pl-8 bg-fixed' style={{ backgroundImage: "url('/assets/hero-bg.svg')" }}>
            <div className='flex items-center pt-[128px] sm:pt-[201px] max-w-[1263px] mx-auto'>
                <div className='max-w-[567px] w-full pb-10 sm:pb-[170px] text-center sm:text-left'>
                    <h4 className="text-[14px] leading-[20px] font-medium text-[#252525] px-3">
                        Frictionless. Effortless.
                    </h4>
                    <h2 className="my-6 text-[36px] md:text-[52px] leading-[44px] md:leading-[60px] font-semibold tracking-[-2.44px] text-[#252525]">
                        Automate Your Marketing. Scale Your Business.
                    </h2>
                    <p className="text-[16px] leading-[24px] font-semibold sm:font-normal text-[#64717E]">
                        The AI-powered virtual marketing agency for solopreneurs, small businesses, and boutique agencies.VILMA.AI centralizes and automates your digital marketing, saving time, money, and effort.
                    </p>

                    <div className="mt-11 mb-6 flex gap-3 justify-center sm:justify-start sm:flex-row flex-col items-center ">
                        <button className="h-11 bg-[#F0B000] w-full sm:w-fit rounded px-6 text-[#472200] text-[16px] leading-[20px] font-inter font-medium cursor-pointer">
                            Try VILMA.AI for free today
                        </button>

                        <button className="h-11 w-full sm:w-fit border border-[#F0B000] rounded px-6 text-[#F0B000] text-[16px] leading-[20px] font-inter font-medium cursor-pointer">
                            Request a Free Demo
                        </button>
                    </div>
                    <p className='text-[#64717E] text-[16px] leading-[24px] font-semibold sm:font-normal'>No credit card · No commitment · Results from day one</p>
                </div>
                {/* <div>
                    <Image src='/assets/hero-right-banner.webp' alt='hero-right-banner' width={710} height={613} className=' absolute right-0 bottom-0' />
                    <div>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero