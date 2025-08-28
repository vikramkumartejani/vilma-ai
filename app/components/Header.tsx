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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

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
        <header className={`w-full px-4 md:px-6 lg:px-8 fixed top-0 z-30 transition-all duration-300 border-b ${
            isScrolled 
            ? 'mt-0 bg-white shadow-sm border-gray-100' 
            : 'mt-4 md:mt-8 lg:mt-[43px] border-[rgba(255,255,255,0)]'
        }`}>
            <div className={`max-w-[1263px] mx-auto w-full ${isScrolled ? 'bg-white' : ''}`}>
                <div className={`w-full flex items-center justify-between gap-5 transition-all duration-300 ${
                    isScrolled ? 'py-4' : 'py-0'
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
                    <nav className='hidden lg:block flex-1 xl:max-w-[681px] mx-auto'>
                        <ul className='w-full flex items-center justify-between gap-2'>
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        className={`text-[14px] leading-[24px] font-light font-inter px-3 py-2 rounded-md transition-all duration-200 ${
                                            isScrolled 
                                            ? 'text-gray-700 hover:text-[#F0B000] hover:bg-yellow-50/50' 
                                            : 'text-gray-800 hover:text-[#F0B000] hover:bg-white/10'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden rounded-md transition-all duration-200 ${
                            isScrolled ? 'text-gray-700' : 'text-gray-800'
                        }`}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        )}
                    </button>

                    {/* CTA Button */}
                    <button className="lg:block hidden h-[42px] rounded px-6 text-[16px] leading-[20px] font-inter font-medium cursor-pointer transition-all duration-200 bg-[#F0B000] hover:bg-[#E0A000] text-[#472200] hover:shadow-sm">
                        Start Free Trial
                    </button>
                </div>
            </div>

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out !z-50 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{
                    boxShadow: isMobileMenuOpen ? '-4px 0 15px rgba(0, 0, 0, 0.1)' : 'none'
                }}
            >
                <div className="p-6 bg-white h-full">
                    {/* Mobile Menu Logo */}
                    <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                        <Image
                            src='/assets/logo.svg'
                            alt='VILMA.AI Logo'
                            width={100}
                            height={28}
                        />
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="mb-8">
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-[16px] font-inter py-2 text-gray-700 hover:text-[#F0B000] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile CTA Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full h-[42px] bg-[#F0B000] hover:bg-[#E0A000] text-[#472200] rounded px-6 text-[16px] leading-[20px] font-inter font-medium cursor-pointer transition-all duration-200"
                    >
                        Start Free Trial
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </header>
    )
}

export default Header