import Image from 'next/image'
import React from 'react'

interface PricingFeature {
    id: number
    text: string
}

interface PricingPlan {
    id: number
    name: string
    price: string
    priceLabel?: string
    description: string
    buttonText: string
    buttonVariant: 'primary' | 'secondary'
    isPopular?: boolean
    features: PricingFeature[]
}

const PricingPlans: React.FC = () => {
    const pricingPlans: PricingPlan[] = [
        {
            id: 1,
            name: 'Starter',
            price: '$47',
            priceLabel: '/per month',
            description: 'For solopreneurs & small teams',
            buttonText: 'Start Free Trial',
            buttonVariant: 'secondary',
            features: [
                { id: 1, text: '2M tokens' },
                { id: 2, text: 'Full AI agency access' },
                { id: 3, text: 'Advanced features' },
                { id: 4, text: 'ROI dashboard' },
                { id: 5, text: 'Global support' }
            ]
        },
        {
            id: 2,
            name: 'Professional',
            price: '$147',
            priceLabel: '/per month',
            description: 'For growing businesses & agencies',
            buttonText: 'Start Free Trial',
            buttonVariant: 'primary',
            isPopular: true,
            features: [
                { id: 1, text: '10M tokens included' },
                { id: 2, text: 'Everything in Starter' },
                { id: 3, text: 'Advanced automation' },
                { id: 4, text: 'Premium analytics' },
                { id: 5, text: 'Priority support' }
            ]
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 'Custom Pricing',
            description: 'For large-scale operations',
            buttonText: 'Contact Sales',
            buttonVariant: 'secondary',
            features: [
                { id: 1, text: 'Unlimited tokens' },
                { id: 2, text: 'Full customization' },
                { id: 3, text: 'Dedicated account manager' },
                { id: 4, text: 'SLA guarantee' }
            ]
        }
    ]

    const getButtonClasses = (variant: 'primary' | 'secondary') => {
        return variant === 'primary'
            ? 'bg-[#F0B000] hover:bg-[#E0A000] text-[#472200]'
            : 'bg-[#1D1D20] hover:bg-[#2D2D30] text-white'
    }

    const getCardClasses = (isPopular: boolean = false) => {
        return isPopular
            ? 'border border-[#00000033] bg-[#FFFBED] shadow-[0.47px_0.47px_3px_0px_rgba(26,26,26,0.08)]'
            : 'border border-[#E1E1E2] shadow-[0.47px_0.47px_2.8px_0px_rgba(26,26,26,0.08)]'
    }

    const getTitleClasses = (isPopular: boolean = false) => {
        return isPopular
            ? 'text-[#F0B000]'
            : 'text-[#1A1A1AB2]'
    }

    return (
        <div id='pricing' className='w-full md:mt-[60px] py-[30px] sm:py-[60px] px-4 md:px-6 lg:px-8 scroll-mt-12'>
            <div className='max-w-[1264px] mx-auto w-full'>
                {/* Header Section */}
                <div className="text-center mb-9 sm:mb-[60px]">
                    <span className="text-[14px] leading-[20px] font-medium text-[#252525]">
                        Pricing Plans
                    </span>
                    <h2 className="my-3 text-[36px] md:text-[44px] leading-[44px] sm:leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
                        Choose the plan that fits your business stage
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22.44px]'>
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-[11.22px] py-[22.44px] px-[18.7px] transition-all duration-300 hover:shadow-sm ${getCardClasses(plan.isPopular)}`}
                        >
                            {/* Plan Header */}
                            <div className='mb-[14.96px]'>
                                <h3 className={`text-[18.7px] leading-[29.92px] font-semibold ${getTitleClasses(plan.isPopular)}`}>
                                    {plan.name}
                                    {plan.isPopular && (
                                        <span className='ml-2 text-[14px] text-[#F0B000]'>
                                            (Most Popular)
                                        </span>
                                    )}
                                </h3>
                            </div>

                            {/* Price Section */}
                            <div className='flex items-end gap-1 mb-[14.96px]'>
                                <h1 className='text-[#1A1A1A] text-[33.66px] leading-[49px] font-bold'>
                                    {plan.price}
                                </h1>
                                {plan.priceLabel && (
                                    <h4 className='text-[#1A1A1AB2] text-[16.83px] leading-[26.18px] font-normal mb-[5px]'>
                                        {plan.priceLabel}
                                    </h4>
                                )}
                            </div>

                            {/* Description */}
                            <p className='text-[#1A1A1AB2] text-[16.83px] leading-[27px] font-normal mb-[14.96px]'>
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <button className={`rounded-[11.22px] w-full py-[7.54px] text-[16.83px] leading-[27px] font-semibold cursor-pointer transition-all duration-200 ${getButtonClasses(plan.buttonVariant)}`}>
                                {plan.buttonText}
                            </button>

                            {/* Divider */}
                            <div className='border border-dashed border-[#1A1A1A2E] my-[29.92px] w-full' />

                            {/* Features List */}
                            <div className='space-y-[18.7px]'>
                                {plan.features.map((feature) => (
                                    <div key={feature.id} className='flex items-center gap-[11.22px]'>
                                        <Image
                                            src='/assets/checkbox-icon.svg'
                                            alt='checkbox'
                                            width={30}
                                            height={30}
                                            className={plan.isPopular ? 'bg-[#FCFCFC] rounded-full' : ''}
                                        />
                                        <h3 className='text-[#1A1A1A] text-[16.83px] leading-[26.18px] font-medium'>
                                            {feature.text}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingPlans