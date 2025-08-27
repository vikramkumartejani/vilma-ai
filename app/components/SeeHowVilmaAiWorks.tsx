import React from 'react'

const SeeHowVilmaAiWorks = () => {
    return (
        <section className="mt-[60px] w-full py-[60px] px-4 md:px-6 lg:px-8">
            <div className="relative rounded-[20px] pt-[115px] pb-[114px] px-4 sm:px-6 border border-[#00000010] overflow-hidden max-w-[1264px] mx-auto">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/assets/transform-your-marketing-bg.png"
                        alt="Transform your marketing background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-[815px] mx-auto">
                    <h2 className="text-4xl md:text-[52px] leading-[60px] tracking-[-2.44px] font-semibold text-[#252525] mb-6">
                        See how VILMA.AI works in 2 minutes.
                    </h2>

                    <p className="text-[20px] font-normal leading-[28px] text-[#64717E] mb-6">
                        Automate campaigns, generate strategic documents instantly, access 17 AI specialists 24/7.
                    </p>

                    <button className="h-11 bg-[#F0B000] rounded px-6 text-[#472200] text-[16px] leading-[20px] font-inter font-medium cursor-pointer">
                        Request Your Free Demo Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SeeHowVilmaAiWorks