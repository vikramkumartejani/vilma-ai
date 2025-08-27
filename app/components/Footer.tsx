import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FooterLink {
    label: string
    href: string
}

interface FooterSection {
    title: string
    links: FooterLink[]
}

const Footer: React.FC = () => {
    const footerSections: FooterSection[] = [
        {
            title: 'Platform',
            links: [
                { label: 'Features', href: '/features' },
                { label: 'Integrations', href: '/integrations' },
                { label: 'API', href: '/api' },
                { label: 'Security', href: '/security' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { label: 'Docs', href: '/docs' },
                { label: 'Blog', href: '/blog' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Support', href: '/support' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Cookies', href: '/cookies' }
            ]
        }
    ]

    const socialLinks = [
        {
            platform: 'Facebook',
            href: '#',
            icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.743 2.24512H13.229C12.1178 2.24512 11.0521 2.68656 10.2663 3.47232C9.48052 4.25809 9.03908 5.32382 9.03908 6.43506V8.94903H6.52512V12.301H9.03908V19.0049H12.391V12.301H14.905L15.743 8.94903H12.391V6.43506C12.391 6.21281 12.4793 5.99967 12.6365 5.84251C12.7936 5.68536 13.0068 5.59707 13.229 5.59707H15.743V2.24512Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            platform: 'Twitter',
            href: '#',
            icon: <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4078 3.9216C19.4078 3.9216 18.8212 5.68138 17.7318 6.77077C19.0726 15.1507 9.85474 21.268 2.64804 16.4914C4.49162 16.5752 6.33519 15.9886 7.67597 14.8155C3.48603 13.5585 1.39106 8.61434 3.48603 4.75959C5.3296 6.93836 8.17877 8.19535 11.0279 8.11155C10.2737 4.592 14.3799 2.58082 16.8938 4.92719C17.8156 4.92719 19.4078 3.9216 19.4078 3.9216Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            platform: 'LinkedIn',
            href: '#',
            icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6927 7.27344C15.0262 7.27344 16.3051 7.80316 17.248 8.74609C18.1909 9.68901 18.7206 10.9679 18.7206 12.3014V18.1673H15.3687V12.3014C15.3687 11.8569 15.1921 11.4306 14.8778 11.1163C14.5635 10.802 14.1372 10.6254 13.6927 10.6254C13.2482 10.6254 12.8219 10.802 12.5076 11.1163C12.1933 11.4306 12.0167 11.8569 12.0167 12.3014V18.1673H8.66478V12.3014C8.66478 10.9679 9.19451 9.68901 10.1374 8.74609C11.0803 7.80316 12.3592 7.27344 13.6927 7.27344Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.31283 8.11035H1.96088V18.1662H5.31283V8.11035Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.63685 5.59707C4.56247 5.59707 5.31283 4.84671 5.31283 3.92109C5.31283 2.99548 4.56247 2.24512 3.63685 2.24512C2.71124 2.24512 1.96088 2.99548 1.96088 3.92109C1.96088 4.84671 2.71124 5.59707 3.63685 5.59707Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
        {
            platform: 'Instagram',
            href: '#',
            icon: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8436 2.24512H6.46369C4.14964 2.24512 2.27374 4.12102 2.27374 6.43506V14.8149C2.27374 17.129 4.14964 19.0049 6.46369 19.0049H14.8436C17.1576 19.0049 19.0335 17.129 19.0335 14.8149V6.43506C19.0335 4.12102 17.1576 2.24512 14.8436 2.24512Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0056 10.0976C14.109 10.795 13.9899 11.5073 13.6652 12.1331C13.3405 12.7589 12.8267 13.2664 12.1969 13.5833C11.5672 13.9003 10.8535 14.0107 10.1574 13.8986C9.4613 13.7866 8.81826 13.458 8.31972 12.9595C7.82118 12.4609 7.49254 11.8179 7.38053 11.1218C7.26852 10.4257 7.37885 9.71202 7.69583 9.08226C8.01281 8.45249 8.52029 7.93871 9.1461 7.61399C9.77191 7.28927 10.4842 7.17015 11.1816 7.27356C11.893 7.37905 12.5516 7.71055 13.0601 8.21907C13.5686 8.7276 13.9001 9.3862 14.0056 10.0976Z" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.2626 6.0166H15.2709" stroke="#F0B000" strokeWidth="1.67598" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        },
    ]

    return (
        <footer className='w-full mt-[60px] px-4 md:px-6 lg:px-8 rounded-t-[17px] bg-[#FAFAFA] border-t-[0.3px] border-[#00000018]'>
            <div className='max-w-[1200px] mx-auto w-full py-16'>
                {/* Main Footer Content */}
                <div className='w-full flex items-start justify-between gap-8 mb-12'>
                    {/* Left Section - Company Info */}
                    <div className='max-w-[386px] w-full'>
                        <Image src='/assets/logo.svg' alt='logo' width={135} height={38} />
                        <p className='my-[24.13px] text-[#64717E] text-[16.09px] leading-[26.15px] font-normal'>
                            The AI-powered virtual marketing agency that automates your campaigns, saves time, and drives measurable results for your business.
                        </p>
                        <div className='flex items-center gap-[16.09px]'>
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.platform}
                                    href={social.href}
                                    className='w-10 h-10 bg-[#1F2937] rounded-lg flex items-center justify-center'
                                    aria-label={social.platform}
                                >
                                    <span>{social.icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className='w-full flex items-start justify-between'>
                        <div className='w-full flex items-start gap-[32.18px]'>
                            {footerSections.map((section) => (
                                <div key={section.title} className='w-full max-w-[176.98px]'>
                                    <h3 className='font-semibold text-[#252525] text-[18px] tracking-[-0.45px] mb-[16.09px]'>{section.title}</h3>
                                    <ul className='space-y-[12.07px]'>
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className='text-[#64717E] hover:text-[#252525] text-[16px] leading-[25px] transition-colors font-normal'
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className='border-t border-[#1F2937] pt-[33.18px]'>
                    <p className='text-[#64717E] text-[14px] leading-[21px] font-normal'>
                        © {new Date().getFullYear()} VILMA.AI. All rights reserved.
                    </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer