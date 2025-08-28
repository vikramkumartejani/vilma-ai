import Image from 'next/image'
import React from 'react'

const FounderCard = () => {
    return (
        <div className="bg-white rounded-[10px] p-4 max-w-[472px] w-full shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-3 mb-3">
                <div className="min-w-[48px] h-[48px] p-[1.5px] rounded-full relative [background:linear-gradient(180deg,#FFD11C_0%,#FF7523_50%,#FF4061_75%,#FF8CC0_87.5%,#65B1E5_93.75%,#3250AC_100%)]">
                    <div className='w-full h-full bg-white rounded-full overflow-hidden'>
                        <Image
                            src="/assets/founder.webp"
                            alt="María González"
                            width={48}
                            height={48}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-[16px] leading-[20px] font-bold text-[#252525]">
                        María González
                    </h3>
                    <p className="text-[14px] leading-[20px] font-light text-[#64717E]">
                        Founder, Digital Agency
                    </p>
                </div>
            </div>
            <p className="text-[16px] leading-[24px] text-[#64717E]">
                "Since implementing VILMA.AI, we've cut down 60% of the time spent on planning and executing campaigns, and our cost per acquisition dropped 35% in just three months."
            </p>
        </div>
    )
}

const Hero = () => {
    return (
        <div className='relative w-full px-4 md:pl-6 lg:pl-8 bg-fixed overflow-hidden' style={{ backgroundImage: "url('/assets/hero-bg.svg')" }}>
            <div className='flex items-center pt-[128px] sm:pt-[201px] max-w-[1263px] mx-auto relative z-30'>
                <div className='lg:max-w-[567px] w-full lg:pb-[170px] text-center sm:text-left'>
                    <h4 className="text-[14px] leading-[20px] font-medium text-[#252525] px-3">
                        Frictionless. Effortless.
                    </h4>
                    <h2 className="my-6 text-[36px] md:text-[52px] leading-[44px] md:leading-[60px] font-semibold tracking-[-2.44px] text-[#252525]">
                        Automate Your Marketing. Scale Your Business.
                    </h2>
                    <p className="text-[16px] leading-[24px] font-semibold sm:font-normal text-[#64717E]">
                        The AI-powered virtual marketing agency for solopreneurs, small businesses, and boutique agencies.VILMA.AI centralizes and automates your digital marketing, saving time, money, and effort.
                    </p>

                    <div className="mt-11 mb-6 flex gap-3 justify-center sm:justify-start sm:flex-row flex-col items-center max-w-[257px] mx-auto sm:mx-0 sm:max-w-[480px]">
                        <button className="h-11 bg-[#F0B000] w-full sm:w-fit rounded px-6 text-[#472200] hover:bg-[#E0A000] transition duration-200 text-[16px] leading-[20px] font-inter font-medium cursor-pointer">
                            Try VILMA.AI for free today
                        </button>

                        <button className="h-11 w-full sm:w-fit border border-[#F0B000] hover:bg-[#e0a00017] transition duration-200 rounded px-6 text-[#F0B000] text-[16px] leading-[20px] font-inter font-medium cursor-pointer">
                            Request a Free Demo
                        </button>
                    </div>
                    <p className='text-[#64717E] text-[16px] leading-[24px] font-semibold sm:font-normal'>No credit card · No commitment · Results from day one</p>
                </div>

            </div>
            <div className='lg:hidden block mt-[17px] mb-10'>
                <FounderCard />
            </div>

            <div className="absolute bottom-0 right-0 h-[500px] xl:h-[613px] rounded-tl-[15px] w-[550px] xl:w-[710px] hidden lg:block shadow-sm pl-6" style={{ background: "linear-gradient(48.52deg, #F6F7F9 4.95%, #F6F7F9 55.56%, #F6F7F9 94.19%)", backdropFilter: "blur(50px)" }}>
                <Image src='/assets/three-dot.svg' alt='three-dot' width={32} height={6} className='absolute top-[19px] left-[24px]' />
                <div className="absolute top-7 right-0 w-[530px] xl:w-[686px] bg-transparent h-[500px] xl:h-[600px] rounded-tl-[15px] overflow-hidden">
                    <Image
                        src='/assets/hero-right-banner.webp'
                        alt='hero-right-banner'
                        width={686}
                        height={600}
                        priority
                        className='w-full h-full object-contain'
                    />
                </div>
                <div className="absolute bottom-[30px] -left-[88px] z-10">
                    <FounderCard />
                </div>
            </div>
        </div>
    )
}

export default Hero