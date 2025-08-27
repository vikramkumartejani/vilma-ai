"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  rating: number
}

const SuccessStories: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      title: 'Founder',
      company: 'Digital Agency',
      quote: 'We reduced campaign time by 60% and CPA dropped 35% in just 3 months.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      title: 'Marketing Director',
      company: 'E-commerce',
      quote: 'VILMA.AI helped us scale campaigns without hiring more people.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Martínez',
      title: 'Owner',
      company: 'Boutique Fitness Studio',
      quote: 'I went from juggling 5 different tools to running everything from one dashboard. Member signups grew 40% in 2 months.',
      rating: 5
    },
    {
      id: 4,
      name: 'David López',
      title: 'CEO',
      company: 'Tech Startup',
      quote: 'Our team saved over 80 hours per month on marketing tasks, freeing us to focus on product growth.',
      rating: 5
    },
    {
      id: 5,
      name: 'Laura Fernández',
      title: 'Marketing Lead',
      company: 'Consulting Firm',
      quote: 'With VILMA.AI, reporting became effortless. Clients now get professional reports instantly, and our retention increased 25%.',
      rating: 5
    },
    {
      id: 6,
      name: 'Javier Torres',
      title: 'Founder',
      company: 'Online Course Platform',
      quote: 'Before VILMA.AI, my campaigns felt disorganized. Now I run AI-guided strategies that increased student enrollment in one quarter.',
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className='w-full mt-[60px] py-[60px] px-4 md:px-6 lg:px-8'>
      <div className='max-w-[1264px] mx-auto w-full'>
        {/* Header Section - Centered */}
        <div className="text-center mb-[60px]">
          <h2 className="text-4xl md:text-[44px] leading-[60px] font-semibold tracking-[-2px] text-[#252525] mb-3">
            Proven Results from Real Clients
          </h2>
          <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
            Businesses transforming their marketing with VILMA.AI
          </p>
        </div>

        {/* First Row Slider */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 h-full">
                  {/* Avatar and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center relative">
                        {/* Main Green Leaf Icon Inside */}
                        <svg 
                          className="w-6 h-6 text-green-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        {/* Smaller Dark Green Leaf at Bottom-Right */}
                        <svg 
                          className="w-3 h-3 text-green-700 absolute -bottom-1 -right-1" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 italic text-base leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Row Slider - Offset timing */}
        <div className="mb-0">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={`second-${testimonial.id}`}>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 h-full">
                  {/* Avatar and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center relative">
                        {/* Main Green Leaf Icon Inside */}
                        <svg 
                          className="w-6 h-6 text-green-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        {/* Smaller Dark Green Leaf at Bottom-Right */}
                        <svg 
                          className="w-3 h-3 text-green-700 absolute -bottom-1 -right-1" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 italic text-base leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SuccessStories