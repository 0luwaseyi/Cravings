// components/Testimonials.tsx

"use client"

import Image from 'next/image';
import { useState, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  position: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Darrell Steward',
      text: 'The attention to detail in crafting each is truly commendable. Every ingredient seems to have a purpose, contributing to a symphony of tastes that is both delightful and satisfying. Whether it is the perfectly seasoned meats, the fresh and vibrant vegetables.',
      image: '/testone.svg',
      position: "Student",
    },
    {
      id: 2,
      name: 'Kathryn Murphy',
      text: 'The attention to detail in crafting each is truly commendable. Every ingredient seems to have a purpose, contributing to a symphony of tastes that is both delightful and satisfying. Whether it is the perfectly seasoned meats, the fresh and vibrant vegetables.',
      image: '/testthree.svg',
      position: "Worker",
    },
    {
      id: 3,
      name: 'Esther Howard',
      text: 'The attention to detail in crafting each is truly commendable. Every ingredient seems to have a purpose, contributing to a symphony of tastes that is both delightful and satisfying. Whether it is the perfectly seasoned meats, the fresh and vibrant vegetables.',
      image: '/testtwo.svg',
      position: "CEO",
    },
    {
      id: 4,
      name: 'Esther Howard',
      text: 'The attention to detail in crafting each is truly commendable. Every ingredient seems to have a purpose, contributing to a symphony of tastes that is both delightful and satisfying. Whether it is the perfectly seasoned meats, the fresh and vibrant vegetables.',
      image: '/testthree.svg',
      position: "CEO",
    },
  ];

  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleScrollLeft = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollLeft -= 350;
      setScrollLeft(testimonialsContainerRef.current.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scrollLeft += 350;
      setScrollLeft(testimonialsContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div ref={testimonialsContainerRef} className="testimonials-container flex overflow-x-auto">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="w-80 mx-4 flex-shrink-0">
            <div className="bg-[#E7E6E6] rounded-lg p-4 shadow-md overflow-hidden">
              <div className='flex flex-row'>
                <Image src={testimonial.image} alt={`Testimonial ${testimonial.id}`} width={40} height={30} />
                <div className="p-4 flex flex-col">
                  <h3 className="text-sm font-bold">{testimonial.name}</h3>
                  <p className='text-xs font-semibold'>{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 flex justify-center p-5">
        <button onClick={handleScrollLeft} className="bg-gray-100 text-white p-2 rounded-full shadow-md mr-2">
          &#10094;
        </button>
        <button onClick={handleScrollRight} className="bg-gray-100 text-white p-2 rounded-full shadow-md">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
