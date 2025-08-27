"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface NavigationLink {
    id: number
    label: string
    href: string
}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigationLinks: NavigationLink[] = [
        {
            id: 1,
            label: 'Platform',
            href: '/#platform'
        },
        {
            id: 2,
            label: 'Features',
            href: '/#features'
        },
        {
            id: 3,
            label: 'Pricing',
            href: '/#pricing'
        },
        {
            id: 4,
            label: 'Use Cases',
            href: '/#usecases'
        },
        {
            id: 5,
            label: 'Success Stories',
            href: '/#successstories'
        },
        {
            id: 6,
            label: 'Resources',
            href: '/#resources'
        },
        {
            id: 7,
            label: 'Company',
            href: '/#company'
        }
    ]

    return (
        <header className={`w-full px-4 md:px-6 lg:px-8 fixed top-0 z-40 transition-all duration-300 ${isScrolled
                ? 'mt-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
                : 'mt-[43px] bg-transparent'
            }`}>
            <div className='max-w-[1263px] mx-auto w-full'>
                <div className={`w-full flex items-center justify-between gap-5 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-0'
                    }`}>
                    {/* Logo */}
                    <Link href='/' className='flex-shrink-0 hover:opacity-80 transition-opacity duration-200'>
                        <Image
                            src='/assets/logo.svg'
                            alt='VILMA.AI Logo'
                            width={135}
                            height={38}
                            priority
                        />
                    </Link>

                    {/* Navigation Menu */}
                    <nav className='hidden lg:block flex-1 max-w-[681px] mx-auto'>
                        <ul className='w-full flex items-center justify-between gap-2'>
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        className={`text-[14px] leading-[24px] font-light font-inter transition-all duration-200 px-3 py-2 rounded-md ${isScrolled
                                                ? 'text-[#000000] hover:text-[#F0B000] hover:bg-yellow-50'
                                                : 'text-[#000] hover:text-[#F0B000] hover:bg-white/10'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className={`lg:hidden p-2 rounded-md transition-all duration-200 ${isScrolled
                            ? 'hover:bg-gray-100 text-black'
                            : 'hover:bg-white/10 text-white'
                        }`}>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>

                    {/* CTA Button */}
                    <button className={`h-[42px] rounded px-6 text-[16px] leading-[20px] font-inter font-medium cursor-pointer transition-all duration-200 hover:shadow-md transform hover:scale-105 flex-shrink-0 ${isScrolled
                            ? 'bg-[#F0B000] hover:bg-[#E0A000] text-[#472200]'
                            : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                        }`}>
                        Start Free Trial
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header