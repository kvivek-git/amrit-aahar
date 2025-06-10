import React, { useState, useRef, useEffect } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const faqs = [
    {
      question: "Is this flour suitable for daily use?",
      answer: "Yes! It's designed to be a regular part of your diet, replacing or mixing with your current flour."
    },
    {
      question: "Does it taste different from regular atta?",
      answer: "It has a slightly nutty and wholesome taste due to the added ingredients, but blends well with most Indian meals."
    },
    {
      question: "Is it safe for kids and elderly?",
      answer: "Absolutely. It's made from clean, natural ingredients and has balanced nutrition for all ages."
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Collapse all FAQs on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-2xl bg-white rounded-2xl mx-auto p-4 my-12" ref={containerRef}>
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="rounded-xl overflow-hidden border border-[#5E412E]">
              {/* Question */}
              <div
                className={`flex justify-between items-center p-4 cursor-pointer transition-all ${
                  isOpen ? "bg-[#5E412E]" : "bg-[#FAEFE5]"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className={`text-md font-semibold ${ isOpen ? "text-white" : "text-[#5E412E]"}`}>{faq.question}</h3>
                <span className={`text-xl ${ isOpen ? "text-white" : "text-[#5E412E]"}`}>{isOpen ? "▲" : "▼"}</span>
              </div>

              {/* Answer */}
              {isOpen && (
                <div className="bg-white text-[#5E412E] p-4 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="my-8 bg-[#5E412E] text-white rounded-2xl mx-auto p-2 font-bold justify-between text-center w-full max-w-[90%] break-words">Got More Questions?, We'd love to answer them!</div>
    </div>
  );
}
