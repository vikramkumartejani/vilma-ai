"use client";
import React from "react";
import "swiper/css";

interface Testimonial {
    id: number;
    name: string;
    title: string;
    company: string;
    quote: string;
    rating: number;
}

const SuccessStories: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "María González",
            title: "Founder",
            company: "Digital Agency",
            quote:
                "We reduced campaign time by 60% and CPA dropped 35% in just 3 months.",
            rating: 5,
        },
        {
            id: 2,
            name: "Carlos Ruiz",
            title: "Marketing Director",
            company: "E-commerce",
            quote: "VILMA.AI helped us scale campaigns without hiring more people.",
            rating: 5,
        },
        {
            id: 3,
            name: "Ana Martínez",
            title: "Owner",
            company: "Boutique Fitness Studio",
            quote:
                "I went from juggling 5 different tools to running everything from one dashboard. Member signups grew 40% in 2 months.",
            rating: 5,
        },
        {
            id: 4,
            name: "David López",
            title: "CEO",
            company: "Tech Startup",
            quote:
                "Our team saved over 80 hours per month on marketing tasks, freeing us to focus on product growth.",
            rating: 5,
        },
        {
            id: 5,
            name: "Laura Fernández",
            title: "Marketing Lead",
            company: "Consulting Firm",
            quote:
                "With VILMA.AI, reporting became effortless. Clients now get professional reports instantly, and our retention increased 25%.",
            rating: 5,
        },
        {
            id: 6,
            name: "Javier Torres",
            title: "Founder",
            company: "Online Course Platform",
            quote:
                "Before VILMA.AI, my campaigns felt disorganized. Now I run AI-guided strategies that increased student enrollment in one quarter.",
            rating: 5,
        },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: rating }, (_, index) => (
            <img
                key={index}
                src="/assets/star.svg"
                alt="star"
                width={16}
                height={16}
                className="w-[9.18px] h-[9.18px] md:w-4 md:h-4"
            />
        ))
    }

    const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
        <div className="bg-[#F8F8F8] rounded-[11.50px] md:rounded-[20px] h-[121px] md:h-[200px] w-[253px] md:w-[439px] py-3.5 px-5 md:p-6 border border-[#0000001A] transition-all duration-300 flex flex-col flex-shrink-0 mx-2 md:mx-4">
            {/* Header with avatar and rating */}
            <div className="flex items-center justify-between mb-3.5 sm:mb-6">
                <div className="flex items-center space-x-2 md:space-x-3 w-full">
                    <div className="w-[28px] h-[28px] md:w-12 md:h-12 rounded-full bg-[#252525] flex items-center justify-center text-white font-semibold overflow-hidden flex-shrink-0">
                        <img
                            src="/assets/review-profile.png"
                            alt="Avatar"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full min-w-0">
                        <div className="flex items-center justify-between w-full mb-0.5 md:mb-1">
                            <h3 className="font-semibold text-[#472200] text-[9.28px] leading-[14px] md:text-[16px] md:leading-[24px] truncate">
                                {testimonial.name}
                            </h3>
                            <div className="flex gap-[1px] flex-shrink-0">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                        <p className="text-black text-[6.96px] leading-[9.28px] md:text-[12px] md:leading-[16px] font-semibold truncate">
                            {testimonial.title}, {testimonial.company}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <blockquote className="text-[#303030] text-[9.28px] leading-[13.93px] md:text-[16px] md:leading-[24px] font-semibold text-wrap flex-grow">
                "{testimonial.quote}"
            </blockquote>
        </div>
    );

    return (
        <>
            <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        
        .scroll-right {
          animation: scrollRight 30s linear infinite;
        }
        
        @media (max-width: 768px) {
          .scroll-left {
            animation-duration: 20s;
          }
          .scroll-right {
            animation-duration: 20s;
          }
        }
      `}</style>

            <section id="successstories" className="scroll-mt-12 relative w-full py-[30px] md:py-[60px] overflow-hidden bg-white">
                <div className="relative z-10 w-full mx-auto">
                    <div className="text-center mb-[60px] px-4">
                        <div className="inline-block px-3 py-1 text-[#252525] text-[14px] leading-[20px]">
                            Success Stories
                        </div>
                        <h2 className="my-3 text-[36px] md:text-[44px] leading-[44px] md:leading-[60px] font-semibold text-[#252525] tracking-[-2.44px] px-5">
                            Proven Results from Real Clients
                        </h2>
                        <p className="text-[16px] leading-[24px] text-[#64717E] max-w-2xl mx-auto px-4">
                            Businesses transforming their marketing with VILMA.AI
                        </p>
                    </div>

                    {/* First Row - Moving Left to Right */}
                    <div className="mb-6 md:mb-8 relative overflow-hidden">
                        <div className="absolute left-0 top-0 w-[100px] md:w-[500px] h-full bg-gradient-to-r bg-opacity-20 from-white to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 w-[100px] md:w-[500px] h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                        <div className="flex scroll-left">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <TestimonialCard
                                    key={`first-${testimonial.id}-${index}`}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Moving Right to Left */}
                    <div className="relative overflow-hidden">
                        {/* Fade overlays */}
                        <div className="absolute left-0 top-0 w-[100px] md:w-[500px] h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 w-[100px] md:w-[500px] h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                        <div className="flex scroll-right">
                            {[
                                ...testimonials.slice().reverse(),
                                ...testimonials.slice().reverse(),
                            ].map((testimonial, index) => (
                                <TestimonialCard
                                    key={`second-${testimonial.id}-${index}`}
                                    testimonial={testimonial}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuccessStories;
