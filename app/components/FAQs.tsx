"use client"
import React, { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQs: React.FC = () => {
  const [openItem, setOpenItem] = useState<number>(1)

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Do I need to be an expert?",
      answer: "No, it's built for non-technical users."
    },
    {
      id: 2,
      question: "What if I already use other tools?",
      answer: "VILMA.AI integrates seamlessly with your existing marketing tools and workflows, so you can continue using what you're familiar with while adding powerful AI capabilities."
    },
    {
      id: 3,
      question: "Will I see results quickly?",
      answer: "Yes! Most users see measurable improvements in their marketing performance within the first 30 days of using VILMA.AI."
    }
  ]

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id)
  }

  return (
    <section className="md:mt-[60px] w-full py-[30px] sm:py-[60px] px-4 md:px-6 lg:px-8">
      <div className="max-w-[896px] w-full mx-auto">
        <div className="text-center mb-11">
          <span className="text-[14px] leading-[20px] font-medium text-[#252525]">
            FAQs
          </span>
          <h2 className="my-4 text-[36px] md:text-[44px] leading-[44px] md:leading-[60px] font-semibold tracking-[-2px] text-[#252525]">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] leading-[24px] font-normal text-[#64717E]">
            Still unsure? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-[16px] pr-5 sm:pr-8 shadow-[0px_1px_2px_0px_#0000000D] backdrop-blur-[4px] border border-[#E2E8F099] transition-all duration-300 ease-in-out ${
                openItem === item.id
                  ? 'bg-[#FFFBEDCC]'
                  : 'bg-[#FFFFFFCC]'
              }`}
            >
              {/* Question Row */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-6 pl-5 sm:pl-12 text-left flex items-center justify-between transition-all duration-200 rounded-lg group cursor-pointer"
              >
                <h3 className="font-semibold text-[#333333] text-[16px] sm:text-[20px] leading-[24px]">
                  {item.question}
                </h3>
                {/* Chevron Icon */}
                <div className="transition-all duration-300 ease-in-out">
                  <svg 
                    className={`transition-all duration-300 ease-in-out ${
                      openItem === item.id ? 'rotate-180' : 'rotate-0'
                    }`} 
                    width="24" 
                    height="25" 
                    viewBox="0 0 24 25" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M18 15.8877L12 9.8877L6 15.8877" 
                      stroke="#94A3B8" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              </button>

              {/* Answer with Smooth Transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="px-5 sm:pr-8 sm:pl-[88px]">
                  <p className="text-[#64717E] text-[16px] leading-[24px] font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs